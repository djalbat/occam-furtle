"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class ProcedureDeclaration {
  constructor(procedure) {
    this.procedure = procedure;
  }

  getProcedure() {
    return this.procedure;
  }

  getString() { return this.procedure.getString(); }

  static name = "ProcedureDeclaration";

  static fromProcedureDeclarationNode(procedureDeclarationNode, fileContext) {
    const { Procedure } = dom,
          context = fileContext,  ///
          procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          procedureDeclaration = new ProcedureDeclaration(procedure);

    return procedureDeclaration;
  }
});
