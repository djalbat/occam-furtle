"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const valueNodesQuery = nodesQuery("/assignment/procedureCall/value"),
      procedureCallNodeQuery = nodeQuery("/assignment/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(string, reference, values) {
    this.string = string;
    this.reference = reference;
    this.values = values;
  }

  getString() {
    debugger
  }

  getReference() {
    return this.reference;
  }

  getValues() {
    return this.values;
  }

  static name = "ProcedureCall";

  static fromAssignmentNode(assigmentNode) {
    let procedureCall = null;

    const procedureCallNode = procedureCallNodeQuery(assigmentNode);

    if (procedureCallNode !== null) {
      const { Reference } = dom,
            reference = Reference.fromAssignmentNode(assigmentNode),
            values = valuesFromAssignmentNode(assigmentNode),
            string = null;

      procedureCall = new ProcedureCall(string, reference, values);
    }

    return procedureCall;
  }
});

function valuesFromAssignmentNode(assigmentNode) {
  const { Value } = dom,
        valueNodes = valueNodesQuery(assigmentNode),
        values = valueNodes.map((valueNode) => {
          const value = Value.fromValueNode(valueNode);

          return value;
        });

  return values;
}
