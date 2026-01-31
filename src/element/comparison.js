"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";

export default define(class Comparison {
  constructor(string, negated, leftExpression, rightExpression) {
    this.string = string;
    this.negated = negated;
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  getString() {
    return this.string;
  }

  isNegated() {
    return this.negated;
  }

  getLeftExpression() {
    return this.leftExpression;
  }

  getRightExpression() {
    return this.rightExpression;
  }

  evaluate(context) {
    let expression;

    const comparisonString = this.string; ///

    context.trace(`Evaluating the '${comparisonString}' comparison...`);

    const leftExpression = this.leftExpression.evaluate(context),
          rightExpression = this.rightExpression.evaluate(context),
          leftExpressionType = leftExpression.getType(),
          rightExpressionType = rightExpression.getType();

    if (leftExpressionType !== rightExpressionType) {
      const leftExpressionString = leftExpression.asString(context),
            rightExpressionString = rightExpression.asString(context),
            message = `The ${leftExpressionString} left expression's type is '${leftExpressionType}' whereas the ${rightExpressionString} right expression's type is '${rightExpressionType}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftExpressionEqualToRightExpression = leftExpression.isEqualTo(rightExpression);

    let boolean = leftExpressionEqualToRightExpression; ///

    if (this.negated) {
      boolean = !boolean; ///
    }

    const { Expression } = elements;

    expression = Expression.fromBoolean(boolean, context);

    context.debug(`...evaluated the '${comparisonString}' comparison.`);

    return expression;
  }

  static name = "Comparison";
});
