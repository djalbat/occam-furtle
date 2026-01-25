"use strict";

import elements from "../../elements";
import Exception from "../../exception";
import BlockContext from "../../context/block";

import { define } from "../../elements";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const stepNodesQuery = nodesQuery("/returnBlock/step"),
      nonsenseNodesQuery = nodesQuery("/returnBlock/nonsense"),
      expressionReturnBlockNodeQuery = nodeQuery("/expression/returnBlock"),
      anonymousProcedureReturnBlockNodeQuery = nodeQuery("/anonymousProcedure/returnBlock"),
      procedureDeclarationReturnBlockNodeQuery = nodeQuery("/procedureDeclaration/returnBlock");

export default define(class ReturnBlock {
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
    if (context === undefined) {
      context = variables;  ///

      variables = [];
    }

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

    const expression = this.returnStatement.evaluate(context);

    return expression;
  }

  static name = "ReturnBlock";

  static fromExpressionNode(expressionNode, context) {
    let returnBlock = null;

    const expressionReturnBlockNode = expressionReturnBlockNodeQuery(expressionNode);

    if (expressionReturnBlockNode !== null) {
      const returnBlockNode = expressionReturnBlockNode;  ///

      returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
    }

    return returnBlock;
  }

  static fromAnonymousProcedureNode(anonymousProcedureNode, context) {
    const anonymousProcedureReturnBlockNode = anonymousProcedureReturnBlockNodeQuery(anonymousProcedureNode),
          returnBlockNode = anonymousProcedureReturnBlockNode,  ///
          returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

    return returnBlock;
  }

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const procedureDeclarationReturnBlockNode = procedureDeclarationReturnBlockNodeQuery(procedureDeclarationNode),
          returnBlockNode = procedureDeclarationReturnBlockNode,  ///
          returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

    return returnBlock;
  }
});

function stringFromReturnStatement(returnStatement, context) {
  const returnStatementString = returnStatement.getString(),
        string = `{ ... ${returnStatementString} }`;

  return string;
}

function stepsFromReturnBlockNode(returnBlockNode, context) {
  const { Step } = elements,
        stepNodes = stepNodesQuery(returnBlockNode),
        steps = stepNodes.map((stepNode) => {
          const step = Step.fromStepNode(stepNode, context);

          return step;
        });

  return steps;
}

function returnBlockFromReturnBlockNode(returnBlockNode, context) {
  const { ReturnBlock, ReturnStatement } = elements,
        returnStatement = ReturnStatement.fromReturnBlockNode(returnBlockNode, context),
        nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context),
        steps = stepsFromReturnBlockNode(returnBlockNode, context),
        string = stringFromReturnStatement(returnStatement, context),
        returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);

  return returnBlock;
}

function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
  const nonsenseNodes = nonsenseNodesQuery(returnBlockNode),
        nonsenseNodesLength = nonsenseNodes.length,
        nonsensical = (nonsenseNodesLength > 0);

  return nonsensical;
}
