"use strict";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE } from "../../types";

export default define(class NegatedExpression {
  constructor(string, type, expression) {
    this.string = string;
    this.type = type;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getExpression() {
    return this.expression;
  }

  evaluate(context) {
    let expression;

    const negatedExpressionString = this.string; ///

    context.trace(`Evaluating the '${negatedExpressionString}' negated expression...`);

    expression = this.expression.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== BOOLEAN_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} left expression's type is '${expressionType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let boolean = expression.getBoolean();

    boolean = !boolean;

    const { Expression } = elements;

    expression = Expression.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${negatedExpressionString}' negated expression.`);

    return expression;
  }

  static name = "NegatedExpression";
});
