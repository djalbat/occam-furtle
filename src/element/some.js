"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE, NOMINAL_VALUES_TYPE } from "../types";
import { termFromBoolean, termFromNominalValue } from "../utilities/term";

const { asyncSome } = asynchronousUtilities;

export default define(class Some extends Element {
  constructor(context, string, node, breakPoint, variable, anonymousProcedure) {
    super(context, string, node, breakPoint);

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

    if (termType !== NOMINAL_VALUES_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type should be '${NOMINAL_VALUES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          nominalValues = primitiveValue, ///
          boolean = await asyncSome(nominalValues, async (nominalValue) => {
            let term;

            term = termFromNominalValue(nominalValue);

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
