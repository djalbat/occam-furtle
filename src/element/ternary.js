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
    let expression;

    const ternaryString = this.string; ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    expression = this.expression.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== BOOLEAN_TYPE) {
      const expressionString = expression.getString(),
            message = `The ${expressionString} expression's type is '${expressionType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const boolean = expression.getBoolean();

    expression = boolean ?
              this.ifExpression.evaluate(context) :
                this.elseExpression.evaluate(context);

    context.debug(`...evaluated the '${ternaryString}' ternary.`);

    return expression;
  }

  static name = "Ternary";
});
