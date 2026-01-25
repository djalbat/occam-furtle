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

  verify(context) {
    const verifies = true;

    const procedureDeclarationString = this.getString();

    context.trace(`Verifying the '${procedureDeclarationString}' procedure declaration...`)

    const procedure = this.getProcedure();

    context.addProcedure(procedure);

    if (verifies) {
      context.debug(`...verified the '${procedureDeclarationString}' procedure declaration.`)
    }

    return verifies;
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