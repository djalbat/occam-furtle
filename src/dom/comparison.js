"use strict";

import dom from "../dom";

import { EQUAL_TO } from "../constants";
import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const terminalNodeQuery = nodeQuery("/comparison/@*"),
      leftValueNodeQuery = nodeQuery("/comparison/value[0]"),
      rightValueNodeQuery = nodeQuery("/comparison/value[1]"),
      comparisonNodeQuery = nodeQuery("/condition/comparison");

export default domAssigned(class Comparison {
  constructor(equalTo, leftValue, rightValue) {
    this.equalTo = equalTo;
    this.leftValue = leftValue;
    this.rightValue = rightValue;
  }

  getEqualTo() {
    return this.equalTo;
  }

  getLeftValue() {
    return this.leftValue;
  }

  getRightValue() {
    return this.rightValue;
  }

  getString() {
    debugger
  }

  static name = "Comparison";

  static fromConditionalNode(conditionalNode, context) {
    let comparison = null;

    const comparisonNode = comparisonNodeQuery(conditionalNode);

    if (comparisonNode !== null) {
      const { Value } = dom,
            leftValueNode = leftValueNodeQuery(comparisonNode),
            rightValueNode = rightValueNodeQuery(comparisonNode),
            equalTo = equalToFromComparisonNode(comparisonNode, context),
            leftValue = Value.fromValueNode(leftValueNode, context),
            rightValue = Value.fromValueNode(rightValueNode, context);

      comparison = new Comparison(equalTo, leftValue, rightValue);
    }

    return comparison;
  }
});

function equalToFromComparisonNode(comparisonNode, context) {
  const terminalNode = terminalNodeQuery(comparisonNode),
        terminalNodeContent = terminalNode.getContent(),
        equalTo = (terminalNodeContent === EQUAL_TO);

  return equalTo;
}