"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const elseBlockNodeQuery = nodeQuery("/conditionalBlock/block[1]"),
      conditionBlockNodeQuery = nodeQuery("/conditionalBlock/block[0]"),
      conditionalBlockNodeQuery = nodeQuery("/step/conditionalBlock");

export default domAssigned(class ConditionalBlock {
  constructor(string, condition, conditionBlock, elseBlock) {
    this.string = string;
    this.condition = condition;
    this.conditionBlock = conditionBlock;
    this.elseBlock = elseBlock;
  }

  getString() {
    return this.string;
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

  resolve(context) {
    const conditionalBlockString = this.string;

    context.trace(`Resolving the '${conditionalBlockString}' conditional block...`);

    const value = this.condition.resolve(context),
          boolean = value.getBoolean();

    if (boolean) {
      this.conditionBlock.resolve(context);
    } else {
      if (this.elseBlock !== null) {
        this.elseBlock.resolve(context);
      }
    }

    context.debug(`...resolved the '${conditionalBlockString}' conditional block.`);
  }

  static name = "ConditionalBlock";

  static fromStepNode(stepNode, context) {
    let conditionalBlock = null;

    const conditionalBlockNode = conditionalBlockNodeQuery(stepNode);

    if (conditionalBlockNode !== null) {
      const { Block, Condition } = dom,
            node = conditionalBlockNode,  ///
            string = context.nodeAsString(node),
            conditionBlockNode = conditionBlockNodeQuery(conditionalBlockNode),
            elseBlockNode = elseBlockNodeQuery(conditionalBlockNode),
            condition = Condition.fromConditionalBlockNode(conditionalBlockNode, context),
            conditionBlock = Block.fromBlockNode(conditionBlockNode, context),
            elseBlock = Block.fromBlockNode(elseBlockNode, context);

      conditionalBlock = new ConditionalBlock(string, condition, conditionBlock, elseBlock);
    }

    return conditionalBlock;
  }
});
