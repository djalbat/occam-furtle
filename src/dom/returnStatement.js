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
    return this.string;
  }

  getValue() {
    return this.value;
  }

  evaluate(context) {
    let value;

    const returnStatementString = this.string;  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    value = this.value.evaluate(context);

    context.debug(`...evaluated the '${returnStatementString}' return statement.`);

    return value;
  }

  static name = "ReturnStatement";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    let returnStatement = null;

    const returnStatementNode = returnStatementNodeQuery(procedureDeclarationNode);

    if (returnStatementNode !== null) {
      const { Value } = dom,
            node = returnStatementNode, ///
            string = context.nodeAsString(node),
            value = Value.fromReturnStatementNode(returnStatementNode, context);

      returnStatement = new ReturnStatement(string, value);
    }

    return returnStatement;
  }
});
