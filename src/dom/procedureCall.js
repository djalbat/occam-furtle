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
