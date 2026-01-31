"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class ProcedureCall {
  constructor(string, reference, expressions) {
    this.string = string;
    this.reference = reference;
    this.expressions = expressions;
  }

  getString() {
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getExpressions() {
    return this.expressions;
  }

  getName() { return this.reference.getName(); }

  evaluate(context) {
    const procedureCallString = this.string;  ///

    context.trace(`Evaluating the '${procedureCallString}' procedure call...`);

    const name = this.getName(),
          procedurePresent = context.isProcedurePresentByName(name);

    if (!procedurePresent) {
      const message = `The '${procedureCallString} procedure is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const procedure = context.findProcedureByName(name),
          expressions = this.expressions.evaluate(context),
          expression = procedure.call(expressions, context);

    context.debug(`...evaluated the '${procedureCallString}' procedure call.`);

    return expression;
  }

  static name = "ProcedureCall";
});
