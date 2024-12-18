"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const ifBlockNodeQuery = nodeQuery("/conditionalBlocks/block[0]"),
      conditionNodeQuery = nodeQuery("/conditionalBlocks/condition"),
      elseBlockNodeQuery = nodeQuery("/conditionalBlocks/block[1]"),
      conditionalBlocksNodeQuery = nodeQuery("/step/conditionalBlocks");

export default domAssigned(class ConditionalBlocks {
  constructor(string, condition, ifBlock, elseBlock) {
    this.string = string;
    this.condition = condition;
    this.ifBlock = ifBlock;
    this.elseBlock = elseBlock;
  }

  getString() {
    return this.string;
  }

  getCondition() {
    return this.condition;
  }

  getConditionBlock() {
    return this.ifBlock;
  }

  getElseBlock() {
    return this.elseBlock;
  }

  evaluate(context) {
    const conditionalBlocksString = this.string; ///

    context.trace(`Evaluating the '${conditionalBlocksString}' conditional blocks...`);

    const value = this.condition.evaluate(context),
          boolean = value.getBoolean();

    if (boolean) {
      this.ifBlock.evaluate(context);
    } else {
      if (this.elseBlock !== null) {
        this.elseBlock.evaluate(context);
      }
    }

    context.debug(`...evaluated the '${conditionalBlocksString}' conditional blocks.`);
  }

  static name = "ConditionalBlocks";

  static fromStepNode(stepNode, context) {
    let conditionalBlocks = null;

    const conditionalBlocksNode = conditionalBlocksNodeQuery(stepNode);

    if (conditionalBlocksNode !== null) {
      const { Block, Condition } = dom,
            string = stringFromConditionalBlocksNode(conditionalBlocksNode, context),
            ifBlockNode = ifBlockNodeQuery(conditionalBlocksNode),
            elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode),
            condition = Condition.fromConditionalBlocksNode(conditionalBlocksNode, context),
            ifBlock = Block.fromBlockNode(ifBlockNode, context),
            elseBlock = Block.fromBlockNode(elseBlockNode, context);

      conditionalBlocks = new ConditionalBlocks(string, condition, ifBlock, elseBlock);
    }

    return conditionalBlocks;
  }
});

function stringFromConditionalBlocksNode(conditionalBlocksNode, context) {
  let string;

  const conditionNode = conditionNodeQuery(conditionalBlocksNode),
        conditionString = context.nodeAsString(conditionNode);

  string = `If (${conditionString}) { ... }`;

  const elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode);

  if (elseBlockNode !== null) {
    string = `${string} Else { ... }`;
  }

  return string;
}
