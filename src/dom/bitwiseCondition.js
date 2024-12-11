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
  constructor(string, disjoint, leftCondition, rightCondition) {
    this.string = string;
    this.disjoint = disjoint;
    this.leftCondition = leftCondition;
    this.rightCondition = rightCondition;
  }

  getString() {
    debugger
  }

  isDisjoint() {
    return this.disjoint;
  }

  getLeftCondition() {
    return this.leftCondition;
  }

  getRightCondition() {
    return this.rightCondition;
  }

  static name = "BitwiseCondition";

  static fromConditionNode(conditionNode) {
    let bitwiseCondition = null;

    const bitwiseConditionNode = bitwiseConditionNodeQuery(conditionNode);

    if (bitwiseConditionNode !== null) {
      const { Condition } = dom,
            leftConditionNode = leftConditionNodeQuery(bitwiseConditionNode),
            rightConditionNode = rightConditionNodeQuery(bitwiseConditionNode),
            disjoint = disjointFromBitwiseConditionNode(bitwiseConditionNode),
            leftCondition = Condition.fromConditionNode(leftConditionNode),
            rightCondition = Condition.fromConditionNode(rightConditionNode),
            string = null;

      bitwiseCondition = new BitwiseCondition(string, disjoint, leftCondition, rightCondition);
    }

    return bitwiseCondition;
  }
});

function disjointFromBitwiseConditionNode(bitwiseConditionNode) {
  const terminalNode = terminalNodeQuery(bitwiseConditionNode),
        terminalNodeContent = terminalNode.getContent(),
        disjoint = (terminalNodeContent === DISJUNCTION);

  return disjoint;
}
