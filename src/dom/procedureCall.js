"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";
import Exception from "../exception";

const procedureCallNodeQuery = nodeQuery("/assignment/procedureCall");

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

  call(context) {
    const procedureCallString = this.string;  ///

    context.trace(`Calling the '${procedureCallString}' procedure...`);

    const procedure = context.findProcedureByReference(this.reference);

    if (procedure === null) {
      const referenceString = this.reference.getString(),
            message = `The '${referenceString} procedure cannot be found.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const values = callValues(this.values, context);

    procedure.call(values, context);

    context.debug(`...called the '${procedureCallString}' procedure.`);
  }

  static name = "ProcedureCall";

  static fromAssignmentNode(assigmentNode, context) {
    let procedureCall = null;

    const procedureCallNode = procedureCallNodeQuery(assigmentNode);

    if (procedureCallNode !== null) {
      const { Values, Reference } = dom,
            node = procedureCallNode, ///
            string = context.nodeAsString(node),
            reference = Reference.fromAssignmentNode(assigmentNode, context),
            values = Values.fromAssignmentNode(assigmentNode, context);

      procedureCall = new ProcedureCall(string, reference, values);
    }

    return procedureCall;
  }
});

function callValues(values, context) {
  const { Values } = dom,
        array = values.mapValue((value) => {
          value = value.call(context);

          return value;
        });

  values = Values.fromArray(array); ///

  return values;
}
