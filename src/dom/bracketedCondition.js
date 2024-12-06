"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const conditionNodeQuery = nodeQuery("/bracketedCondition/condition"),
      bracketedConditionNodeQuery = nodeQuery("/condition/bracketedCondition");

export default domAssigned(class BracketedCondition {
  constructor(condition) {
    this.condition = condition;
  }

  getCondition() {
    return this.condition;
  }

  getString() {
    debugger
  }

  static name = "BracketedCondition";

  static fromConditionNode(conditionNode, context) {
    let bracketedCondition = null;

    const bracketedConditionNode = bracketedConditionNodeQuery(conditionNode);

    if (bracketedConditionNode !== null) {
      const { Condition } = dom,
            conditionNode = conditionNodeQuery(bracketedConditionNode),
            condition = Condition.fromConditionNode(conditionNode);

      bracketedCondition = new BracketedCondition(condition);
    }

    return bracketedCondition;
  }
});
