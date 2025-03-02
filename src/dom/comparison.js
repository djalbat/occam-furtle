"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { EQUAL_TO, NOT_EQUAL_TO } from "../constants";

const terminalNodeQuery = nodeQuery("/comparison/@*"),
      leftValueNodeQuery = nodeQuery("/comparison/value[0]"),
      rightValueNodeQuery = nodeQuery("/comparison/value[1]"),
      valueComparisonNodeQuery = nodeQuery("/value/comparison"),
      conditionComparisonNodeQuery = nodeQuery("/condition/comparison");

export default domAssigned(class Comparison {
  constructor(string, negated, leftValue, rightValue) {
    this.string = string;
    this.negated = negated;
    this.leftValue = leftValue;
    this.rightValue = rightValue;
  }

  getString() {
    return this.string;
  }

  isNegated() {
    return this.negated;
  }

  getLeftValue() {
    return this.leftValue;
  }

  getRightValue() {
    return this.rightValue;
  }

  evaluate(context) {
    let value;

    const comparisonString = this.string; ///

    context.trace(`Evaluating the '${comparisonString}' comparison...`);

    const leftValue = this.leftValue.evaluate(context),
          rightValue = this.rightValue.evaluate(context),
          leftValueType = leftValue.getType(),
          rightValueType = rightValue.getType();

    if (leftValueType !== rightValueType) {
      const leftValueString = leftValue.asString(context),
            rightValueString = rightValue.asString(context),
            message = `The ${leftValueString} left value's type is '${leftValueType}' whereas the ${rightValueString} right value's type is '${rightValueType}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftValueEqualToRightValue = leftValue.isEqualTo(rightValue);

    let boolean = leftValueEqualToRightValue; ///

    if (this.negated) {
      boolean = !boolean; ///
    }

    const { Value } = dom;

    value = Value.fromBoolean(boolean, context);

    context.debug(`...evaluated the '${comparisonString}' comparison.`);

    return value;
  }

  static name = "Comparison";

  static fromValueNode(valudNode, context) {
    let comparison = null;

    const valueComparisonNode = valueComparisonNodeQuery(valudNode);

    if (valueComparisonNode !== null) {
      const comparisonNode = valueComparisonNode; ///

      comparison = comparisonFromComparisonNode(comparisonNode, context);
    }

    return comparison;
  }

  static fromConditionNode(conditionNode, context) {
    let comparison = null;

    const conditionComparisonNode = conditionComparisonNodeQuery(conditionNode);

    if (conditionComparisonNode !== null) {
      const comparisonNode = conditionComparisonNode; ///

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
  const { Value, Comparison } = dom,
        leftValueNode = leftValueNodeQuery(comparisonNode),
        rightValueNode = rightValueNodeQuery(comparisonNode),
        rightValue = Value.fromValueNode(rightValueNode, context),
        leftValue = Value.fromValueNode(leftValueNode, context),
        negated = negatedFromComparisonNode(comparisonNode, context),
        string = stringFromNegatedLeftValueAndRightValue(negated, leftValue, rightValue, context),
        comparison = new Comparison(string, negated, leftValue, rightValue);

  return comparison;
}

function stringFromNegatedLeftValueAndRightValue(negated, leftValue, rightValue, context) {
  const operatorString = negated ?
                           EQUAL_TO :
                            NOT_EQUAL_TO,
        leftValueString = leftValue.asString(context),
        rightValueString = rightValue.asString(context),
        string = `${leftValueString} ${operatorString} ${rightValueString}`;

  return string;
}
