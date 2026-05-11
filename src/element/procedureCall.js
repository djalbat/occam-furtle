"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";

export default define(class ProcedureCall extends Element {
  constructor(context, string, node, breakPoint, reference, values) {
    super(context, string, node, breakPoint);

    this.reference = reference;
    this.values = values;
  }

  getReference() {
    return this.reference;
  }

  getValues() {
    return this.values;
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
          values = this.values.evaluate(context),
          value = await procedure.call(values, context),
          valueString = value.getString();

    context.debug(`...evaluated the '${procedureCallString}' procedure call as '${valueString}'.`);

    return value;
  }

  static name = "ProcedureCall";
});
