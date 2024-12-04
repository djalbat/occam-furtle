"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const elseBlockNodeQuery = nodeQuery("/conditionalBlock/block[1]"),
      conditionBlockNodeQuery = nodeQuery("/conditionalBlock/block[0]"),
      conditionalBlockNodeQuery = nodeQuery("/step/conditionalBlock");

export default domAssigned(class ConditionalBlock {
  constructor(condition, conditionBlock, elseBlock) {
    this.condition = condition;
    this.conditionBlock = conditionBlock;
    this.elseBlock = elseBlock;
  }

  getCondition() {
    return this.condition;
  }

  getConditionBlock() {
    return this.conditionBlock;
  }

  getElseBlock() {
    return this.elseBlock;
  }

  getString() {
    debugger
  }

  static name = "ConditionalBlock";

  static fromStepNode(stepNode, context) {
    let conditionalBlock = null;

    const conditionalBlockNode = conditionalBlockNodeQuery(stepNode);

    if (conditionalBlockNode !== null) {
      const { Block, Condition } = dom,
            conditionBlockNode = conditionBlockNodeQuery(conditionalBlockNode),
            elseBlockNode = elseBlockNodeQuery(conditionalBlockNode),
            condition = Condition.fromConditionalBlockNode(conditionalBlockNode, context),
            conditionBlock = Block.fromBlockNode(conditionBlockNode, context),
            elseBlock = Block.fromBlockNode(elseBlockNode, context);

      conditionalBlock = new ConditionalBlock(condition, conditionBlock, elseBlock);
    }

    return conditionalBlock;
  }
});
