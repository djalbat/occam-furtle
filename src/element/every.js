"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";
import { termFromNode, termFromBoolean } from "../utilities/term";

const { asyncEvery } = asynchronousUtilities;

export default define(class Every extends Element {
  constructor(context, string, node, variable, anonymousProcedure) {
    super(context, string, node)

    this.string = string;
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

    const everyString = this.getString();

    context.trace(`Evaluating the '${everyString}' every...`);

    term = this.variable.evaluate(context);

    const termType = term.getType();

    if (termType !== NODES_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = term.getNodes(),
          boolean = await asyncEvery(nodes, async (node) => {
            let term;

            const { Terms } = elements;

            term = termFromNode(node, context);

            const terms = Terms.fromTerm(term, context);

            term = await this.anonymousProcedure.call(terms, context);

            const termType = term.getType();

            if (termType !== BOOLEAN_TYPE) {
              const termString = term.getString(),
                    message = `The '${termString}' term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE}'.`,
                    exception = Exception.fromMessage(message);

              throw exception;
            }

            const boolean = term.getBoolean();

            return boolean;
          });

    term = termFromBoolean(boolean, context);

    const termString = term.getString();

    context.trace(`...evaluated the '${everyString}' every as '${termString}'.`);

    return term;
  }

  static name = "Every";
});
