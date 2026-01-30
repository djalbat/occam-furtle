"use strict";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE } from "../../types";

export default define(class LogicalExpression {
  constructor(string, type, disjunction, leftExpression, rightExpression) {
    this.string = string;
    this.type = type;
    this.disjunction = disjunction;
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  isDisjunction() {
    return this.disjunction;
  }

  getLeftExpression() {
    return this.leftExpression;
  }

  getRightExpression() {
    return this.rightExpression;
  }

  evaluate(context) {
    let expression;

    const logicalExpressionString = this.string; ///

    context.trace(`Evaluating the '${logicalExpressionString}' logical expression...`);

    const { Expression } = elements,
          leftExpression = this.leftExpression.evaluate(context),
          rightExpression = this.rightExpression.evaluate(context),
          leftExpressionType = leftExpression.getType(),
          rightExpressionType = rightExpression.getType();

    if (leftExpressionType !== BOOLEAN_TYPE) {
      const leftExpressionString = leftExpression.asString(context),
            message = `The ${leftExpressionString} left expression's type is '${leftExpressionType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    if (rightExpressionType !== BOOLEAN_TYPE) {
      const rightExpressionString = rightExpression.asString(context),
            message = `The ${rightExpressionString} right expression's type is '${rightExpressionType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftExpressionBoolean = leftExpression.getBoolean(),
          rightExpressionBoolean = rightExpression.getBoolean(),
          boolean = this.disjunction ?
                      (leftExpressionBoolean || rightExpressionBoolean) :
                        (leftExpressionBoolean && rightExpressionBoolean);

    expression = Expression.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${logicalExpressionString}' logical expression.`);

    return expression;
  }

  static name = "LogicalExpression";
});
