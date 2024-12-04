"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const forEachLoopNodeQuery = nodeQuery("/step/forEachLoop");

export default domAssigned(class ForEachLoop {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "ForEachLoop";

  static fromStepNode(stepNode, context) {
    let forEachLoop = null;

    const forEachLoopNode = forEachLoopNodeQuery(stepNode);

    if (forEachLoopNode !== null) {
      debugger
    }

    return forEachLoop;
  }
});
