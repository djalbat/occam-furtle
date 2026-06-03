"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";

export default define(class ProcedureDeclaration extends Element {
  constructor(context, string, node, breakPoint, procedure) {
    super(context, string, node, breakPoint);

    this.string = string;
    this.procedure = procedure;
  }

  getProcedure() {
    return this.procedure;
  }

  verify(context) {
    const verifies = true;

    const procedureDeclarationString = this.getString();

    context.trace(`Verifying the '${procedureDeclarationString}' function declaration...`)

    const procedure = this.getProcedure();

    context.addProcedure(procedure);

    if (verifies) {
      context.debug(`...verified the '${procedureDeclarationString}' function declaration.`)
    }

    return verifies;
  }

  static name = "ProcedureDeclaration";
});
