"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const conditionNodeQuery = nodeQuery("/negatedCondition/condition"),
      negatedConditionNodeQuery = nodeQuery("/condition/negatedCondition");

export default domAssigned(class NegatedCondition {
  constructor(string, condition) {
    this.string = string;
    this.condition = condition;
  }

  getString() {
    debugger
  }

  getCondition() {
    return this.condition;
  }

  evaluate(context) {
    let value;

    const negatedConditionString = this.string; ///

    context.trace(`Evaluating the '${negatedConditionString}' negated condition...`);

    value = this.condition.evaluate(context);

    let boolean = value.getBoolean();

    boolean = !boolean;

    const { Value } = dom;

    value = Value.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${negatedConditionString}' negated condition.`);

    return value;
  }

  static name = "NegatedCondition";

  static fromConditionNode(conditionNode, context) {
    let negatedCondition = null;

    const negatedConditionNode = negatedConditionNodeQuery(conditionNode);

    if (negatedConditionNode !== null) {
      const { Condition } = dom,
            node = negatedConditionNode,  //
            string = context.nodeAsString(node),
            conditionNode = conditionNodeQuery(negatedConditionNode),
            condition = Condition.fromConditionNode(conditionNode, context);

      negatedCondition = new NegatedCondition(string, condition);
    }

    return negatedCondition;
  }
});
