"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const conditionalBlockNodeQuery = nodeQuery("/step/conditionalBlock");

export default domAssigned(class ConditionalBlock {
  constructor(condition) {
    this.condition = condition;
  }

  getCondition() {
    return this.condition;
  }

  getString() {
    debugger
  }

  static name = "ConditionalBlock";

  static fromStepNode(stepNode, context) {
    let conditionalBlock = null;

    const conditionalBlockNode = conditionalBlockNodeQuery(stepNode);

    if (conditionalBlockNode !== null) {
      const { Condition } = dom,
            condition = Condition.fromConditionalBlockNode(conditionalBlockNode, context);

      debugger
    }

    return conditionalBlock;
  }
});
