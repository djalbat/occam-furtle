"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const stepNodesQuery = nodesQuery("/block/step"),
      forEachLoopBlockNodeQuery = nodeQuery("/forEachLoop/anonymousProcedure/block");

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

  static fromBlockNode(blockNode) {
    let block = null;

    if (blockNode !== null) {
      const stepNodes = stepNodesQuery(blockNode),
            steps = stepsFromStepNodes(stepNodes);

      block = new Block(steps);
    }

    return block;
  }

  static fromForEachLoopNode(forEachLoopNode) {
    const forEachLoopBockNode = forEachLoopBlockNodeQuery(forEachLoopNode),
          blockNode = forEachLoopBockNode,  ///
          stepNodes = stepNodesQuery(blockNode),
          steps = stepsFromStepNodes(stepNodes),
          block = new Block(steps);

    return block;
  }
});

function stepsFromStepNodes(stepNodes) {
  const { Step } = dom,
        steps = stepNodes.map((stepNode) => {
          const step = Step.fromStepNode(stepNode);

          return step;
        });

  return steps;
}
