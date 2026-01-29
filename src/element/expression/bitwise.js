"use strict";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE } from "../../types";
import { bitwiseExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression } from "../../utilities/string";

export default define(class BitwiseExpression {
  constructor(string, type, disjection, leftExpression, rightExpression) {
    this.string = string;
    this.type = type;
    this.disjection = disjection;
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
    return this.disjection;
  }

  getLeftExpression() {
    return this.leftExpression;
  }

  getRightExpression() {
    return this.rightExpression;
  }

  evaluate(context) {
    let expression;

    const bitwiseExpressionString = this.string; ///

    context.trace(`Evaluating the '${bitwiseExpressionString}' bitwise expression...`);

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
          boolean = this.disjection ?
                      (leftExpressionBoolean || rightExpressionBoolean) :
                        (leftExpressionBoolean && rightExpressionBoolean);

    expression = Expression.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${bitwiseExpressionString}' bitwise expression.`);

    return expression;
  }

  static name = "BitwiseExpression";

  static fromExpressionNode(expressionNode, context) {
    let bitwiseExpression = null;

    const bitwiseExpressionNode = expressionNode.getBitwiseExpressionNode();

    if (bitwiseExpressionNode !== null) {
      bitwiseExpression = bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context);
    }

    return bitwiseExpression;
  }
});

function bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
  const { Expression, BitwiseExpression } = elements,
        leftExpressionNode = bitwiseExpressionNode.getLeftExpressionNode(),
        rightExpressionNode = bitwiseExpressionNode.getRightExpressionNode(),
        type = BOOLEAN_TYPE,
        disjection = disjunctionFromBitwiseExpressionNode(bitwiseExpressionNode, context),
        leftExpression = Expression.fromExpressionNode(leftExpressionNode, context),
        rightExpression = Expression.fromExpressionNode(rightExpressionNode, context),
        string = bitwiseExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression(disjection, leftExpression, rightExpression, context),
        bitwiseExpression = new BitwiseExpression(string, type, disjection, leftExpression, rightExpression);

  return bitwiseExpression;
}

function disjunctionFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
  const disjection = bitwiseExpressionNode.isDisjunction();

  return disjection;
}
