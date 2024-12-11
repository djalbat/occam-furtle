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
    return this.string;
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

  static fromConditionNode(conditionNode, context) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          node = conditionNode, ///
          string = context.nodeAsString(node),
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }

  static fromConditionalBlockNode(conditionalBlockNode, context) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          conditionNode = conditionNodeQuery(conditionalBlockNode),
          node = conditionNode, ///
          string = context.nodeAsString(node),
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }
});
