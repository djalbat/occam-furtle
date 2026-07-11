"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import Exception from "../exception";

import { free } from "../utilities/context";
import { define } from "../elements";

const { breakable } = breakPointUtilities;

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

  evaluate = breakable(function (context, continuation) {
    const procedureCallString = this.getString();  ///

    context.trace(`Evaluating the '${procedureCallString}' function call...`);

    const procedureName = this.getProcedureName(),
          procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

    if (!procedurePresent) {
      const message = `The '${procedureCallString}' function is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const procedure = context.findProcedureByProcedureName(procedureName),
          values = this.values.evaluate(context);

    free((context) => {
      procedure.call(values, context, (value) => {
        const valueString = value.getString();

        context.debug(`...evaluated the '${procedureCallString}' function call as '${valueString}'.`);

        return continuation(value);
      });
    }, context);
  });

  static name = "ProcedureCall";
});
