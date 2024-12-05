"use strict";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const stepNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/step");

export default domAssigned(class ReturnBlock {
  constructor(steps) {
    this.steps = steps;
  }

  getSteps() {
    return this.steps;
  }

  getString() {
    debugger
  }

  static name = "ReturnBlock";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const stepNodes = stepNodesQuery(procedureDeclarationNode),
          steps = stepsFromStepNodes(stepNodes, context),
          returnBlock = new ReturnBlock(steps);

    return returnBlock;
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
