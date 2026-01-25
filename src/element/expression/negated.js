"use strict";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { nodeQuery } from "../../utilities/query";
import { BOOLEAN_TYPE } from "../../types";

const expressionNodeQuery = nodeQuery("/negatedExpression/expression"),
      expressionNegatedExpressionNodeQuery = nodeQuery("/expression/negatedExpression");

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

  static fromExpressionNode(expressionNode, context) {
    let negatedExpression = null;

    const expressionNegatedExpressionNode = expressionNegatedExpressionNodeQuery(expressionNode);

    if (expressionNegatedExpressionNode !== null) {
      const negatedExpressionNode = expressionNegatedExpressionNode; ///

      negatedExpression = negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context);
    }

    return negatedExpression;
  }
});

function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
  const { Expression, NegatedExpression } = elements,
        expressionNode = expressionNodeQuery(negatedExpressionNode),
        expression = Expression.fromExpressionNode(expressionNode, context),
        type = BOOLEAN_TYPE,
        string = stringFromExpression(expression, context),
        negatedExpression = new NegatedExpression(string, type, expression);

  return negatedExpression;
}

function stringFromExpression(expression, context) {
  const expressionString = expression.asString(context),
        string = `!${expressionString}`;

  return string;
}
