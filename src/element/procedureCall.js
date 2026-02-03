"use strict";

import Element from "../element";
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

  getName() { return this.reference.getName(); }

  evaluate(context) {
    const procedureCallString = this.getString();  ///

    context.trace(`Evaluating the '${procedureCallString}' procedure call...`);

    const name = this.getName(),
          procedurePresent = context.isProcedurePresentByName(name);

    if (!procedurePresent) {
      const message = `The '${procedureCallString} procedure is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const procedure = context.findProcedureByName(name),
          terms = this.terms.evaluate(context),
          term = procedure.call(terms, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${procedureCallString}' procedure call as '${termString}'.`);

    return term;
  }

  static name = "ProcedureCall";
});
