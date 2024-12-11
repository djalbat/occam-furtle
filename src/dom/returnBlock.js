"use strict";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const stepNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/step");

export default domAssigned(class ReturnBlock {
  constructor(steps, returnStatement) {
    this.steps = steps;
    this.returnStatement = returnStatement;
  }

  getSteps() {
    return this.steps;
  }

  getReturnStatement() {
    return this.returnStatement;
  }

  call(context) {
    this.steps.forEach((step) => {
      step.call(context);
    });
  }

  static name = "ReturnBlock";

  static fromProcedureDeclarationNode(procedureDeclarationNode) {
    const { ReturnStatement } = dom,
          stepNodes = stepNodesQuery(procedureDeclarationNode),
          steps = stepsFromStepNodes(stepNodes),
          returnStatement = ReturnStatement.fromProcedureDeclarationNode(procedureDeclarationNode),
          returnBlock = new ReturnBlock(steps, returnStatement);

    return returnBlock;
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
