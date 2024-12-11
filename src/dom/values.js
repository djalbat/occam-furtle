"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const stepNodesQuery = nodesQuery("/block/step"),
      forEachLoopBlockNodeQuery = nodeQuery("/forEachLoop/anonymousProcedure/block");

export default domAssigned(class Values {
  constructor(string, steps) {
    this.string = string;
    this.steps = steps;
  }

  getString() {
    return this.string;
  }

  getSteps() {
    return this.steps;
  }

  static name = "Values";

  static fromBlockNode(blockNode, context) {
    let block = null;

    if (blockNode !== null) {
      const node = blockNode, ///
            string = context.nodeAsString(node),
            stepNodes = stepNodesQuery(blockNode),
            steps = stepsFromStepNodes(stepNodes, context);

      block = new Values(string, steps);
    }

    return block;
  }

  static fromForEachLoopNode(forEachLoopNode, context) {
    const forEachLoopBockNode = forEachLoopBlockNodeQuery(forEachLoopNode),
          blockNode = forEachLoopBockNode,  ///
          stepNodes = stepNodesQuery(blockNode),
          node = blockNode, ///
          string = context.nodeAsString(node),
          steps = stepsFromStepNodes(stepNodes, context),
          block = new Values(string, steps);

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
