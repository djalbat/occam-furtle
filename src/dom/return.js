"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const valueNodeQuery = nodeQuery("/returnBlock/return");

export default domAssigned(class Return {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getString() {
    debugger
  }

  static name = "Return";

  static fromReturnBlockNode(returnBlockNode, context) {
    let return = null;

    const valueNode =

    return block;
  }
});

function stepsFromStepNodes(stepNodes, context) {
  const { Step } = dom,
        steps = stepNodes.map((stepNode) => {
          const step = Step.fromStepNode(stepNode, context);

          return step;
        });

  return steps;
}
