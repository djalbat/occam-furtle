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

  static fromConditionalBlockNode(conditionalBlockNode, context) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          conditionalNode = conditionNodeQuery(conditionalBlockNode),
          value = Value.fromConditionalNode(conditionalNode, context),
          comparison = Comparison.fromConditionalNode(conditionalNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionalNode(conditionalNode, context),
          bracketedCondition = BracketedCondition.fromConditionalNode(conditionalNode, context),
          condition = new Condition(value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }
});
