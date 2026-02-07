"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";

export default define(class ProcedureDeclaration extends Element {
  constructor(context, string, node, procedure) {
    super(context, string, node)

    this.string = string;
    this.procedure = procedure;
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
