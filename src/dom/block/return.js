"use strict";

import dom from "../../dom";
import BlockContext from "../../context/block";

import { nodesQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const stepNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/step");

export default domAssigned(class ReturnBlock {
  constructor(string, steps, returnStatement) {
    this.string = string;
    this.steps = steps;
    this.returnStatement = returnStatement;
  }

  getString() {
    return this.string;
  }

  getSteps() {
    return this.steps;
  }

  getReturnStatement() {
    return this.returnStatement;
  }

  evaluate(variables, context) {
    const blockContext = BlockContext.fromVariables(variables, context);

    context = blockContext; ///

    this.steps.forEach((step) => {
      step.evaluate(context);
    });

    const value = this.returnStatement.evaluate(context);

    return value;
  }

  static name = "ReturnBlock";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { ReturnStatement } = dom,
          node = procedureDeclarationNode,  ///
          string = context.nodeAsString(node),
          stepNodes = stepNodesQuery(procedureDeclarationNode),
          steps = stepsFromStepNodes(stepNodes, context),
          returnStatement = ReturnStatement.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          returnBlock = new ReturnBlock(string, steps, returnStatement);

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
