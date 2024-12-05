"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const returnStatementNodeQuery = nodeQuery("/procedureDeclaration/returnBlock/returnStatement");

export default domAssigned(class ReturnStatement {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getString() {
    debugger
  }

  static name = "ReturnStatement";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    let returnStatement = null;

    const returnStatementNode = returnStatementNodeQuery(procedureDeclarationNode);

    if (returnStatementNode !== null) {
      const { Value } = dom,
            value = Value.fromReturnStatementNode(returnStatementNode, context);

      returnStatement = new ReturnStatement(value);
    }

    return returnStatement;
  }
});
