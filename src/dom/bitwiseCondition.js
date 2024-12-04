"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const bitwiseConditionNodeQuery = nodeQuery("/condition/bitwiseCondition");

export default domAssigned(class BitwiseCondition {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "BitwiseCondition";

  static fromConditionalNode(conditionalNode, context) {
    let bitwiseConddition = null;

    const bitwiseConditionNode = bitwiseConditionNodeQuery(conditionalNode);

    if (bitwiseConditionNode !== null) {
      debugger
    }

    return bitwiseConddition;
  }
});
