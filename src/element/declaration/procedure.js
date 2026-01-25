"use strict";

import elements from "../../elements";

import { define } from "../../elements";

export default define(class ProcedureDeclaration {
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
    const procedureDeclaration = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context);

    return procedureDeclaration;
  }
});

function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Procedure, ProcedureDeclaration } = elements,
        procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context),
        string = stringFromProcedure(procedure, context),
        procedureDeclaration = new ProcedureDeclaration(string, procedure);

  return procedureDeclaration;
}

function stringFromProcedure(procedure, context) {
  const procedureString = procedure.getString(),
        string = `${procedureString};`;

  return string;
}