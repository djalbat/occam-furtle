"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const bracketedConditionNodeQuery = nodeQuery("/condition/bracketedCondition");

export default domAssigned(class BracketedCondition {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "BracketedCondition";

  static fromConditionalNode(conditionalNode, context) {
    let bracketedConddition = null;

    const bracketedConditionNode = bracketedConditionNodeQuery(conditionalNode);

    if (bracketedConditionNode !== null) {
      debugger
    }

    return bracketedConddition;
  }
});
