"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";
import { termFromNode, termFromBoolean } from "../utilities/term";

export default define(class Some {
  constructor(string, variable, anonymousProcedure) {
    this.string = string;
    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate(context) {
    let term;

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

    const nodes = term.getNodes(),
          boolean = nodes.some((node) => {
            let term;

            term = termFromNode(node, context);

            const { Terms } = elements,
                  terms = Terms.fromTerm(term, context);

            term = this.anonymousProcedure.call(terms, context);

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

    context.trace(`...evaluated the '${someString}' some.`);

    return term;
  }

  static name = "Some";
});
