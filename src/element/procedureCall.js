"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";

export default define(class ProcedureCall extends Element {
  constructor(context, string, node, reference, terms) {
    super(context, string, node)

    this.reference = reference;
    this.terms = terms;
  }

  getReference() {
    return this.reference;
  }

  getTerms() {
    return this.terms;
  }

  getProcedureName() { return this.reference.getProcedureName(); }

  async evaluate(context) {
    await this.break(context);

    const procedureCallString = this.getString();  ///

    context.trace(`Evaluating the '${procedureCallString}' procedure call...`);

    const procedureName = this.getProcedureName(),
          procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

    if (!procedurePresent) {
      const message = `The '${procedureCallString} procedure is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const procedure = context.findProcedureByProcedureName(procedureName),
          terms = this.terms.evaluate(context),
          term = await procedure.call(terms, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${procedureCallString}' procedure call as '${termString}'.`);

    return term;
  }

  static name = "ProcedureCall";
});
