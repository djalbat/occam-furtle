"use strict";

import dom from "./dom";

export default class Procedure {
  static fromProcedureDeclarationNode(procedureDeclarationNode, fileContext) {
    const { Statement } = dom,
          statementNode = statementNodeQuery(procedureDeclarationNode),
          localContext = LocalContext.fromFileContext(fileContext),
          statement = Statement.fromStatementNode(statementNode, localContext),
          procedure = new Procedure(statement);

    return procedure;
  }
}
