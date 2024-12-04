"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const conditionNodeQuery = nodeQuery("/conditionalBlock/condition");

export default domAssigned(class Condition {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "Condition";

  static fromConditionalBlockNode(conditionalBlockNode, context) {
    const conditionNode = conditionNodeQuery(conditionalBlockNode);

    debugger

  }
});
