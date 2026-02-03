"use strict";

import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE } from "../types";

export default define(class Ternary {
  constructor(string, term, ifExpression, elseExpression) {
    this.string = string;
    this.term = term;
    this.ifExpression = ifExpression;
    this.elseExpression = elseExpression;
  }

  getString() {
    return this.string;
  }

  getTerm() {
    return this.term;
  }

  getIfBlock() {
    return this.ifExpression;
  }

  getElseBlock() {
    return this.elseExpression;
  }

  evaluate(context) {
    let term;

    const ternaryString = this.string; ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    term = this.term.evaluate(context);

    const termType = term.getType();

    if (termType !== BOOLEAN_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = term.getPrimitiveValue(),
          boolean = primitiveValue; ///

    term = boolean ?
              this.ifExpression.evaluate(context) :
                this.elseExpression.evaluate(context);

    const termString = term.getString();

    context.debug(`...evaluated the '${ternaryString}' ternary as '${termString}'.`);

    return term;
  }

  static name = "Ternary";
});
