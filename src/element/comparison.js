"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";
import { EQUAL_TO, NOT_EQUAL_TO } from "../constants";

const terminalNodeQuery = nodeQuery("/comparison/@*"),
      leftExpressionNodeQuery = nodeQuery("/comparison/expression[0]"),
      rightExpressionNodeQuery = nodeQuery("/comparison/expression[1]"),
      expressionComparisonNodeQuery = nodeQuery("/expression/comparison");

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

  static fromExpressionNode(valudNode, context) {
    let comparison = null;

    const expressionComparisonNode = expressionComparisonNodeQuery(valudNode);

    if (expressionComparisonNode !== null) {
      const comparisonNode = expressionComparisonNode; ///

      comparison = comparisonFromComparisonNode(comparisonNode, context);
    }

    return comparison;
  }
});

function negatedFromComparisonNode(comparisonNode) {
  const terminalNode = terminalNodeQuery(comparisonNode),
        terminalNodeContent = terminalNode.getContent(),
        negated = (terminalNodeContent !== EQUAL_TO);

  return negated;
}

function comparisonFromComparisonNode(comparisonNode, context) {
  const { Expression, Comparison } = elements,
        leftExpressionNode = leftExpressionNodeQuery(comparisonNode),
        rightExpressionNode = rightExpressionNodeQuery(comparisonNode),
        rightExpression = Expression.fromExpressionNode(rightExpressionNode, context),
        leftExpression = Expression.fromExpressionNode(leftExpressionNode, context),
        negated = negatedFromComparisonNode(comparisonNode, context),
        string = stringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression, context),
        comparison = new Comparison(string, negated, leftExpression, rightExpression);

  return comparison;
}

function stringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression, context) {
  const operatorString = negated ?
                           EQUAL_TO :
                            NOT_EQUAL_TO,
        leftExpressionString = leftExpression.asString(context),
        rightExpressionString = rightExpression.asString(context),
        string = `${leftExpressionString} ${operatorString} ${rightExpressionString}`;

  return string;
}
