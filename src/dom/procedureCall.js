"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const valueNodesQuery = nodesQuery("/assignment/procedureCall/value"),
      procedureCallNodeQuery = nodeQuery("/assignment/procedureCall");

export default domAssigned(class ProcedureCall {
  constructor(reference, values) {
    this.reference = reference;
    this.values = values;
  }

  getReference() {
    return this.reference;
  }

  getValues() {
    return this.values;
  }

  getString() {
    debugger
  }

  static name = "ProcedureCall";

  static fromAssignmentNode(assigmentNode, context) {
    let procedureCall = null;

    const procedureCallNode = procedureCallNodeQuery(assigmentNode);

    if (procedureCallNode !== null) {
      const { Reference } = dom,
            reference = Reference.fromAssignmentNode(assigmentNode, context),
            values = valuesFromAssignmentNode(assigmentNode, context);

      procedureCall = new ProcedureCall(reference, values);
    }

    return procedureCall;
  }
});

function valuesFromAssignmentNode(assigmentNode, context) {
  const { Value } = dom,
        valueNodes = valueNodesQuery(assigmentNode),
        values = valueNodes.map((valueNode) => {
          const value = Value.fromValueNode(valueNode);

          return value;
        });

  return values;
}
