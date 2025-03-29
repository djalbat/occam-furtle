"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { BOOLEAN_TYPE } from "../../types";
import { CONJUNCTION, DISJUNCTION } from "../../constants";

const terminalNodeQuery = nodeQuery("/bitwiseExpression/@*"),
      leftExpressionNodeQuery = nodeQuery("/bitwiseExpression/expression[0]"),
      rightExpressionNodeQuery = nodeQuery("/bitwiseExpression/expression[1]"),
      expressionBitwiseExpressionNodeQuery = nodeQuery("/expression/bitwiseExpression");

export default domAssigned(class BitwiseExpression {
  constructor(string, type, disjoint, leftExpression, rightExpression) {
    this.string = string;
    this.type = type;
    this.disjoint = disjoint;
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  isDisjoint() {
    return this.disjoint;
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

    const { Expression } = dom,
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
          boolean = this.disjoint ?
                      (leftExpressionBoolean || rightExpressionBoolean) :
                        (leftExpressionBoolean && rightExpressionBoolean);

    expression = Expression.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${bitwiseExpressionString}' bitwise expression.`);

    return expression;
  }

  static name = "BitwiseExpression";

  static fromExpressionNode(expressionNode, context) {
    let bitwiseExpression = null;

    const expressionBitwiseExpressionNode = expressionBitwiseExpressionNodeQuery(expressionNode);

    if (expressionBitwiseExpressionNode !== null) {
      const bitwiseExpressionNode = expressionBitwiseExpressionNode; ///

      bitwiseExpression = bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context);
    }

    return bitwiseExpression;
  }
});

function bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
  const { Expression, BitwiseExpression } = dom,
        leftExpressionNode = leftExpressionNodeQuery(bitwiseExpressionNode),
        rightExpressionNode = rightExpressionNodeQuery(bitwiseExpressionNode),
        type = BOOLEAN_TYPE,
        disjoint = disjointFromBitwiseExpressionNode(bitwiseExpressionNode, context),
        leftExpression = Expression.fromExpressionNode(leftExpressionNode, context),
        rightExpression = Expression.fromExpressionNode(rightExpressionNode, context),
        string = stringFromTypeDisjointLeftExpressionAndRightExpression(disjoint, leftExpression, rightExpression, context),
        bitwiseExpression = new BitwiseExpression(string, type, disjoint, leftExpression, rightExpression);

  return bitwiseExpression;
}

function disjointFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
  const terminalNode = terminalNodeQuery(bitwiseExpressionNode),
        terminalNodeContent = terminalNode.getContent(),
        disjoint = (terminalNodeContent === DISJUNCTION);

  return disjoint;
}

function stringFromTypeDisjointLeftExpressionAndRightExpression(disjoint, leftExpression, rightExpression, context) {
  const operatorString = disjoint ?
                           DISJUNCTION :
                             CONJUNCTION,
        leftExpressionString = leftExpression.asString(context),
        rightExpressionString = rightExpression.asString(context),
        string = `${leftExpressionString} ${operatorString} ${rightExpressionString}`;

  return string;
}
