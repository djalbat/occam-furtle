"use strict";

import Exception from "../exception";
import BlockContext from "../context/block";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";
import { returnBlockFromReturnBlockNode } from "../utilities/element";

const procedureDeclarationReturnBlockNodeQuery = nodeQuery("/procedureDeclaration/returnBlock");

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

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const procedureDeclarationReturnBlockNode = procedureDeclarationReturnBlockNodeQuery(procedureDeclarationNode),
          returnBlockNode = procedureDeclarationReturnBlockNode,  ///
          returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

    return returnBlock;
  }
});
