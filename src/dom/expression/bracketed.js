"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const expressionNodeQuery = nodeQuery("/bracketedExpression/expression"),
      expressionBracketedExpressionNodeQuery = nodeQuery("/expression/bracketedExpression");

export default domAssigned(class BracketedExpression {
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

    const expressionBracketedExpressionNode = expressionBracketedExpressionNodeQuery(expressionNode);

    if (expressionBracketedExpressionNode !== null) {
      const bracketedExpressionNode = expressionBracketedExpressionNode; ///

      bracketedExpression = bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context);
    }

    return bracketedExpression;
  }
});

function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
  const { Expression, BracketedExpression } = dom,
        expressionNode = expressionNodeQuery(bracketedExpressionNode),
        expression = Expression.fromExpressionNode(expressionNode, context),
        string = stringFromExpression(expression, context),
        bracketedExpression = new BracketedExpression(string, expression);

  return bracketedExpression;
}

function stringFromExpression(expression, context) {
  const expressionString = expression.asString(context),
        string = `(${expressionString})`;

  return string;
}
