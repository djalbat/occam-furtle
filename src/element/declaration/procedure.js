"use strict";

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
});
