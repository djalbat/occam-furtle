"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";

const ifExpressionNodeQuery = nodeQuery("/ternary/expression[1]"),
      elseExpressionNodeQuery = nodeQuery("/ternary/expression[2]"),
      expressionTernaryNodeQuery = nodeQuery("/expression/ternary");

export default domAssigned(class Ternary {
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
      const expressionString = expression.asString(context),
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

  static fromExpressionNode(expressionNode, context) {
    let ternary = null;

    const expressionTernaryNode = expressionTernaryNodeQuery(expressionNode);

    if (expressionTernaryNode !== null) {
      const ternaryNode = expressionTernaryNode; ///

      ternary = ternaryFromTernaryNode(ternaryNode, context);
    }

    return ternary;
  }
});

function ternaryFromTernaryNode(ternaryNode, context) {
  const { Expression, Ternary } = dom,
        ifExpressionNode = ifExpressionNodeQuery(ternaryNode),
        elseExpressionNode = elseExpressionNodeQuery(ternaryNode),
        expression = Expression.fromTernaryNode(ternaryNode, context),
        ifExpression = Expression.fromExpressionNode(ifExpressionNode, context),
        elseExpression = Expression.fromExpressionNode(elseExpressionNode, context),
        string = stringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context),
        ternary = new Ternary(string, expression, ifExpression, elseExpression);

  return ternary;
}

function stringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context) {
  const expressionString = expression.asString(context),
        ifExpressionString = ifExpression.asString(context),
        elseExpressionString = elseExpression.asString(context),
        string = `If (${expressionString}) ${ifExpressionString} Else ${elseExpressionString};`;

  return string;
}
