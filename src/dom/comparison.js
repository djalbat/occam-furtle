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
  constructor(string, equalTo, leftValue, rightValue) {
    this.string = string;
    this.equalTo = equalTo;
    this.leftValue = leftValue;
    this.rightValue = rightValue;
  }

  getString() {
    debugger
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

  static name = "Comparison";

  static fromConditionNode(conditionNode) {
    let comparison = null;

    const comparisonNode = comparisonNodeQuery(conditionNode);

    if (comparisonNode !== null) {
      const { Value } = dom,
            leftValueNode = leftValueNodeQuery(comparisonNode),
            rightValueNode = rightValueNodeQuery(comparisonNode),
            equalTo = equalToFromComparisonNode(comparisonNode),
            leftValue = Value.fromValueNode(leftValueNode),
            rightValue = Value.fromValueNode(rightValueNode),
            string = null;

      comparison = new Comparison(string, equalTo, leftValue, rightValue);
    }

    return comparison;
  }
});

function equalToFromComparisonNode(comparisonNode) {
  const terminalNode = terminalNodeQuery(comparisonNode),
        terminalNodeContent = terminalNode.getContent(),
        equalTo = (terminalNodeContent === EQUAL_TO);

  return equalTo;
}