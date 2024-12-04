"use strict";

import { domAssigned } from "../dom";

export default domAssigned(class Block {
  constructor(steps) {
    this.steps = steps;
  }

  getSteps() {
    return this.steps;
  }

  getString() {
    debugger
  }

  static name = "Block";

  static fromBlockNode(blockNode, context) {
    debugger
  }
});
