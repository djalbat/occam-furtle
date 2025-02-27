"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";

const valueNodeQuery = nodeQuery("/conditionalBlocks/value"),
      ifBlockNodeQuery = nodeQuery("/conditionalBlocks/block[0]"),
      elseBlockNodeQuery = nodeQuery("/conditionalBlocks/block[1]"),
      conditionalBlocksNodeQuery = nodeQuery("/step/conditionalBlocks");

export default domAssigned(class ConditionalBlocks {
  constructor(string, value, ifBlock, elseBlock) {
    this.string = string;
    this.value = value;
    this.ifBlock = ifBlock;
    this.elseBlock = elseBlock;
  }

  getString() {
    return this.string;
  }

  getValue() {
    return this.value;
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

    const value = this.value.evaluate(context),
          valueType = value.getType();

    if (valueType !== BOOLEAN_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const boolean = value.getBoolean();

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
      const { Block, Value } = dom,
            string = stringFromConditionalBlocksNode(conditionalBlocksNode, context),
            ifBlockNode = ifBlockNodeQuery(conditionalBlocksNode),
            elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode),
            value = Value.fromConditionalBlocksNode(conditionalBlocksNode, context),
            ifBlock = Block.fromBlockNode(ifBlockNode, context),
            elseBlock = Block.fromBlockNode(elseBlockNode, context);

      conditionalBlocks = new ConditionalBlocks(string, value, ifBlock, elseBlock);
    }

    return conditionalBlocks;
  }
});

function stringFromConditionalBlocksNode(conditionalBlocksNode, context) {
  let string;

  const valueNode = valueNodeQuery(conditionalBlocksNode),
        conditionString = context.nodeAsString(valueNode);

  string = `If (${conditionString}) { ... }`;

  const elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode);

  if (elseBlockNode !== null) {
    string = `${string} Else { ... }`;
  }

  return string;
}
