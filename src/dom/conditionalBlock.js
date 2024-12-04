"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const conditionalBlockNodeQuery = nodeQuery("/step/conditionalBlock");

export default domAssigned(class ConditionalBlock {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "ConditionalBlock";

  static fromStepNode(stepNode, context) {
    let conditionalBlock = null;

    const conditionalBlockNode = conditionalBlockNodeQuery(stepNode);

    if (conditionalBlockNode !== null) {
      debugger
    }

    return conditionalBlock;
  }
});
