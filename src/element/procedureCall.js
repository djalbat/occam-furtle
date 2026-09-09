"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { free } from "../utilities/context";
import { define } from "../elements";
import { procedureCallStringFromReferenceAndValues } from "../utilities/string";

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

  evaluate(context, forward, back) {
    const procedureCallString = this.getString();  ///

    context.trace(`Evaluating the '${procedureCallString}' function call...`);

    const procedureName = this.getProcedureName(),
          procedurePresent = context.isProcedurePresentByProcedureName(procedureName),
          importedProcedurePresent = context.isImportedProcedurePresentByProcedureName(procedureName);

    if (!procedurePresent && !importedProcedurePresent) {
      const message = `The '${procedureCallString}' function is not present.'`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    let procedure;

    if (!importedProcedurePresent) {
      procedure = context.findProcedureByProcedureName(procedureName);
    } else {
      const importedProcedure = context.findImportedProcedureByProcedureName(procedureName);

      procedure = importedProcedure;  ///
    }

    return this.values.evaluate(context, (values, back) => {
      return free((context) => {
        return procedure.evaluate(values, context, (value, back) => {
          const valueString = value.getString();

          context.debug(`...evaluated the '${procedureCallString}' function call as '${valueString}'.`);

          return forward(value, back);
        }, back);
      }, context);
    }, back);
  }

  static name = "ProcedureCall";

  static fromReferenceAndValues(reference, values, context) {
    const procedureCallString = procedureCallStringFromReferenceAndValues(reference, values),
          node = null,
          string = procedureCallString, ///
          breakPoint = null;

    context = null;

    const procedureCall = new ProcedureCall(context, string, node, breakPoint, reference, values);

    return procedureCall;
  }
});
