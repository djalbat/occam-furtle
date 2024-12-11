"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const conditionNodeQuery = nodeQuery("/conditionalBlock/condition");

export default domAssigned(class Condition {
  constructor(string, value, comparison, bitwiseCondition, bracketedCondition) {
    this.string = string;
    this.value = value;
    this.comparison = comparison;
    this.bitwiseCondition = bitwiseCondition;
    this.bracketedCondition = bracketedCondition;
  }

  getString() {
    debugger
  }

  getValue() {
    return this.value;
  }

  getComparison() {
    return this.comparison;
  }

  getBitwiseCondition() {
    return this.bitwiseCondition;
  }

  getBracketedCondition() {
    return this.bracketedCondition;
  }

  static name = "Condition";

  static fromConditionNode(conditionNode) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          value = Value.fromConditionNode(conditionNode),
          comparison = Comparison.fromConditionNode(conditionNode),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode),
          string = null,
          condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }

  static fromConditionalBlockNode(conditionalBlockNode) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          conditionNode = conditionNodeQuery(conditionalBlockNode),
          value = Value.fromConditionNode(conditionNode),
          comparison = Comparison.fromConditionNode(conditionNode),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode),
          string = null,
          condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }
});
