"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const comparisonNodeQuery = nodeQuery("/condition/comparison");

export default domAssigned(class Comparison {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "Comparison";

  static fromConditionalNode(conditionalNode, context) {
    let comparison = null;

    const comparisonNode = comparisonNodeQuery(conditionalNode);

    if (comparisonNode !== null) {
      debugger
    }

    return comparison;
  }
});
