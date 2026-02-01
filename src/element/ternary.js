"use strict";

import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE } from "../types";

export default define(class Ternary {
  constructor(string, expression, ifExpression, elseExpression) {
    this.string = string;
    this.expression = expression;
    this.ifExpression = ifExpression;
    this.elseExpression = elseExpression;
  }

  getString() {
    return this.string;
  }

  getExpression() {
    return this.expression;
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

    term = this.expression.evaluate(context);

    const termType = term.getType();

    if (termType !== BOOLEAN_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const boolean = term.getBoolean();

    term = boolean ?
              this.ifExpression.evaluate(context) :
                this.elseExpression.evaluate(context);

    context.debug(`...evaluated the '${ternaryString}' ternary.`);

    return term;
  }

  static name = "Ternary";
});
