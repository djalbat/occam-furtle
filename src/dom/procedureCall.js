"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const valueProcedureCallNodeQuery = nodeQuery("/value/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(string, reference, values) {
    this.string = string;
    this.reference = reference;
    this.values = values;
  }

  getString() {
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getValues() {
    return this.values;
  }

  evaluate(context) {
    const procedureCallString = this.string;  ///

    context.trace(`Evaluating the '${procedureCallString}' procedure call...`);

    const procedurePresent = context.isProcedurePresentByReference(this.reference);

    if (!procedurePresent) {
      const message = `The '${procedureCallString} procedure is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const fileContext = context.getFileContext(),
          procedure = context.findProcedureByReference(this.reference),
          values = this.values.evaluate(context),
          value = procedure.call(values, fileContext);

    context.debug(`...evaluated the '${procedureCallString}' procedure call.`);

    return value;
  }

  static name = "ProcedureCall";

  static fromValueNode(valueNode, context) {
    let procedureCall = null;

    const valueProcedureCallNode = valueProcedureCallNodeQuery(valueNode);

    if (valueProcedureCallNode !== null) {
      const procedureCallNode = valueProcedureCallNode; ///

      procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
    }

    return procedureCall;
  }
});

function procedureCallFromProcedureCallNode(procedureCallNode, context) {
  const { Values, Reference, ProcedureCall } = dom,
        reference = Reference.fromProcedureCallNode(procedureCallNode, context),
        values = Values.fromProcedureCallNode(procedureCallNode, context),
        string = stringFromValuesAndReference(values, reference, context),
        procedureCall = new ProcedureCall(string, reference, values);

  return procedureCall;
}

function stringFromValuesAndReference(values, reference, context) {
  const valuesString = values.getString(),
        referenceString = reference.getString(),
        string = `${referenceString}(${valuesString})`;

  return string;
}