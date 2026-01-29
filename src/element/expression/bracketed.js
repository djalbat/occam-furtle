"use strict";

import elements from "../../elements";

import { define } from "../../elements";
import { bracketedExpressionStringFromBExpression } from "../../utilities/string";

export default define(class BracketedExpression {
  constructor(string, expression) {
    this.string = string;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getExpression() {
    return this.expression;
  }

  getType() { return this.expression.getType(); }

  evaluate(context) {
    let expression;

    const bracketedExpressionString = this.string; ///

    context.trace(`Evaluating the '${bracketedExpressionString}' bracketed expression...`);

    expression = this.expression.evaluate(context);

    context.debug(`...evaluated the '${bracketedExpressionString}' bracketed expression.`);

    return expression;
  }

  static name = "BracketedExpression";

  static fromExpressionNode(expressionNode, context) {
    let bracketedExpression = null;

    const bracketedExpressionNode = expressionNode.getBracketedExpressionNode();

    if (bracketedExpressionNode !== null) {
      bracketedExpression = bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context);
    }

    return bracketedExpression;
  }
});

function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
  const { Expression, BracketedExpression } = elements,
        expressionNode = bracketedExpressionNode.getExpressionNode(),
        expression = Expression.fromExpressionNode(expressionNode, context),
        bracketedExpressionString = bracketedExpressionStringFromBExpression(expression, context),
        string = bracketedExpressionString, ///
        bracketedExpression = new BracketedExpression(string, expression);

  return bracketedExpression;
}

