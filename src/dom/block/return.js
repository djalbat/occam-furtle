"use strict";

import dom from "../../dom";
import Exception from "../../exception";
import BlockContext from "../../context/block";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const stepNodesQuery = nodesQuery("/returnBlock/step"),
      nonsenseNodesQuery = nodesQuery("/returnBlock/nonsense"),
      anonymousProcedureReturnBlockNodeQuery = nodeQuery("/anonymousProcedure/returnBlock"),
      procedureDeclarationReturnBlockNodeQuery = nodeQuery("/procedureDeclaration/returnBlock");

export default domAssigned(class ReturnBlock {
  constructor(string, steps, nonsensical, returnStatement) {
    this.string = string;
    this.steps = steps;
    this.nonsensical = nonsensical;
    this.returnStatement = returnStatement;
  }

  getString() {
    return this.string;
  }

  getSteps() {
    return this.steps;
  }

  isNonsensical() {
    return this.nonsensical;
  }

  getReturnStatement() {
    return this.returnStatement;
  }

  evaluate(variables, context) {
    if (this.nonsensical) {
      const message = `The return block is nonsensical.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

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
    const procedureDeclarationReturnBlockNode = procedureDeclarationReturnBlockNodeQuery(procedureDeclarationNode),
          returnBlockNode = procedureDeclarationReturnBlockNode,  ///
          returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

    return returnBlock;
  }

  static fromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const anonymousProcedureReturnBlockNode = anonymousProcedureReturnBlockNodeQuery(anonymousProcedureNode),
          returnBlockNode = anonymousProcedureReturnBlockNode,  ///
          returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

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

function returnBlockFromReturnBlockNode(returnBlockNode, context) {
  const { ReturnBlock, ReturnStatement } = dom,
        node = returnBlockNode, ///
        string = context.nodeAsString(node),
        stepNodes = stepNodesQuery(returnBlockNode),
        steps = stepsFromStepNodes(stepNodes, context),
        nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context),
        returnStatement = ReturnStatement.fromReturnBlockNode(returnBlockNode, context),
        returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);

  return returnBlock;
}

function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
  const nonsenseNodes = nonsenseNodesQuery(returnBlockNode),
        nonsenseNodesLength = nonsenseNodes.length,
        nonsensical = (nonsenseNodesLength > 0);

  return nonsensical;
}
