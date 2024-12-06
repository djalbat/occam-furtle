"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const conditionNodeQuery = nodeQuery("/conditionalBlock/condition");

export default domAssigned(class Condition {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "Condition";

  static fromConditionNode(conditionNode, context) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }

  static fromConditionalBlockNode(conditionalBlockNode, context) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          conditionNode = conditionNodeQuery(conditionalBlockNode),
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }
});
