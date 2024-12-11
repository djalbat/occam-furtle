"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const returnStatementNodeQuery = nodeQuery("/procedureDeclaration/returnBlock/returnStatement");

export default domAssigned(class ReturnStatement {
  constructor(string, value) {
    this.string = string;
    this.value = value;
  }

  getString() {
    debugger
  }

  getValue() {
    return this.value;
  }

  static name = "ReturnStatement";

  static fromProcedureDeclarationNode(procedureDeclarationNode) {
    let returnStatement = null;

    const returnStatementNode = returnStatementNodeQuery(procedureDeclarationNode);

    if (returnStatementNode !== null) {
      const { Value } = dom,
            value = Value.fromReturnStatementNode(returnStatementNode),
            string = null;

      returnStatement = new ReturnStatement(string, value);
    }

    return returnStatement;
  }
});
