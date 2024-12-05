"use strict";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const stepNodesQuery = nodesQuery("/block/step");

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
    let block = null;

    if (blockNode !== null) {
      const stepNodes = stepNodesQuery(blockNode),
            steps = stepsFromStepNodes(stepNodes, context);

      block = new Block(steps);
    }

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
