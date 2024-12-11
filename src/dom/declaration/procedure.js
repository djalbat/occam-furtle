"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class ProcedureDeclaration {
  constructor(string, procedure) {
    this.string = string;
    this.procedure = procedure;
  }

  getString() {
    return this.string;
  }

  getProcedure() {
    return this.procedure;
  }

  static name = "ProcedureDeclaration";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Procedure } = dom,
          node = procedureDeclarationNode,  ///
          string = context.nodeAsString(node),
          procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          procedureDeclaration = new ProcedureDeclaration(string, procedure);

    return procedureDeclaration;
  }
});
