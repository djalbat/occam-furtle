"use strict";

import Element from "../element";
import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { asyncSome } from "../utilities/asynchronous";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";
import { termFromNode, termFromBoolean } from "../utilities/term";

export default define(class Some extends Element {
  constructor(context, string, node, variable, anonymousProcedure) {
    super(context, string, node)

    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  async evaluate(context) {
    let term;

    await this.break(context);

    const someString = this.getString();

    context.trace(`Evaluating the '${someString}' some...`);

    term = this.variable.evaluate(context);

    const termType = term.getType();

    if (termType !== NODES_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nodes = primitiveValue, ///
          boolean = await asyncSome(nodes, async (node) => {
            let term;

            term = termFromNode(node, context);

            const { Terms } = elements,
                  terms = Terms.fromTerm(term, context);

            term = await this.anonymousProcedure.call(terms, context);

            const termType = term.getType();

            if (termType !== BOOLEAN_TYPE) {
              const termString = term.getString(),
                    message = `The '${termString}' term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE}'.`,
                    exception = Exception.fromMessage(message);

              throw exception;
            }

            const primitiveValue = term.getPrimitiveValue(),
                  boolean = primitiveValue; ///

            return boolean;
          });

    term = termFromBoolean(boolean, context);

    const termString = term.getString();

    context.trace(`...evaluated the '${someString}' some as '${termString}'.`);

    return term;
  }

  static name = "Some";
});
