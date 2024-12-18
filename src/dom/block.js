"use strict";

import dom from "../dom";
import BlockContext from "../context/block";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const stepNodesQuery = nodesQuery("/block/step"),
      forEachLoopBlockNodeQuery = nodeQuery("/forEachLoop/anonymousProcedure/block");

export default domAssigned(class Block {
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

  evaluate(variables, context) {
    if (context === undefined) {
      context = variables;  ///

      variables = [];
    }

    const blockContext = BlockContext.fromVariables(variables, context);

    context = blockContext; ///

    this.steps.forEach((step) => {
      step.evaluate(context);
    });
  }

  static name = "Block";

  static fromBlockNode(blockNode, context) {
    let block = null;

    if (blockNode !== null) {
      const node = blockNode, ///
            string = context.nodeAsString(node),
            stepNodes = stepNodesQuery(blockNode),
            steps = stepsFromStepNodes(stepNodes, context);

      block = new Block(string, steps);
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
          block = new Block(string, steps);

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
