"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const conditionNodeQuery = nodeQuery("/bracketedCondition/condition"),
      bracketedConditionNodeQuery = nodeQuery("/condition/bracketedCondition");

export default domAssigned(class BracketedCondition {
  constructor(string, condition) {
    this.string = string;
    this.condition = condition;
  }

  getString() {
    return this.string;
  }

  getCondition() {
    return this.condition;
  }

  evaluate(context) {
    let value;

    const bracketedConditionString = this.string; ///

    context.trace(`Evaluating the '${bracketedConditionString}' bracketed condition...`);

    value = this.condition.evaluate(context);

    context.debug(`...evaluated the '${bracketedConditionString}' bracketed condition.`);

    return value;
  }

  static name = "BracketedCondition";

  static fromConditionNode(conditionNode, context) {
    let bracketedCondition = null;

    const bracketedConditionNode = bracketedConditionNodeQuery(conditionNode);

    if (bracketedConditionNode !== null) {
      const { Condition } = dom,
            node = bracketedConditionNode,  ///
            string = context.nodeAsString(node),
            conditionNode = conditionNodeQuery(bracketedConditionNode),
            condition = Condition.fromConditionNode(conditionNode, context);

      bracketedCondition = new BracketedCondition(string, condition);
    }

    return bracketedCondition;
  }
});
