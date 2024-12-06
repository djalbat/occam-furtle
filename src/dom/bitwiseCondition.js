"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { DISJUNCTION } from "../constants";

const terminalNodeQuery = nodeQuery("/bitwiseCondition/@*"),
      leftConditionNodeQuery = nodeQuery("/bitwiseCondition/condition[0]"),
      rightConditionNodeQuery = nodeQuery("/bitwiseCondition/condition[1]"),
      bitwiseConditionNodeQuery = nodeQuery("/condition/bitwiseCondition");

export default domAssigned(class BitwiseCondition {
  constructor(disjoined, leftCondition, rightCondition) {
    this.disjoined = disjoined;
    this.leftCondition = leftCondition;
    this.rightCondition = rightCondition;
  }

  isDisjoined() {
    return this.disjoined;
  }

  getLeftCondition() {
    return this.leftCondition;
  }

  getRightCondition() {
    return this.rightCondition;
  }

  getString() {
    debugger
  }

  static name = "BitwiseCondition";

  static fromConditionNode(conditionNode, context) {
    let bitwiseCondition = null;

    const bitwiseConditionNode = bitwiseConditionNodeQuery(conditionNode);

    if (bitwiseConditionNode !== null) {
      const { Condition } = dom,
            leftConditionNode = leftConditionNodeQuery(bitwiseConditionNode),
            rightConditionNode = rightConditionNodeQuery(bitwiseConditionNode),
            disjoined = disjoinedFromBitwiseConditionNode(bitwiseConditionNode),
            leftCondition = Condition.fromConditionNode(leftConditionNode),
            rightCondition = Condition.fromConditionNode(rightConditionNode);

      bitwiseCondition = new BitwiseCondition(disjoined, leftCondition, rightCondition);
    }

    return bitwiseCondition;
  }
});

function disjoinedFromBitwiseConditionNode(bitwiseConditionNode) {
  const terminalNode = terminalNodeQuery(bitwiseConditionNode),
        terminalNodeContent = terminalNode.getContent(),
        disjoined = (terminalNodeContent === DISJUNCTION);

  return disjoined;
}
