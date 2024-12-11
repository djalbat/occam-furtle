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
    return this.string;
  }

  getReference() {
    return this.reference;
  }

  getValues() {
    return this.values;
  }

  static name = "ProcedureCall";

  static fromAssignmentNode(assigmentNode, context) {
    let procedureCall = null;

    const procedureCallNode = procedureCallNodeQuery(assigmentNode);

    if (procedureCallNode !== null) {
      const { Reference } = dom,
            node = procedureCallNode, ///
            string = context.nodeAsString(node),
            reference = Reference.fromAssignmentNode(assigmentNode, context),
            values = valuesFromAssignmentNode(assigmentNode, context);

      procedureCall = new ProcedureCall(string, reference, values);
    }

    return procedureCall;
  }
});

function valuesFromAssignmentNode(assigmentNode, context) {
  const { Value } = dom,
        valueNodes = valueNodesQuery(assigmentNode),
        values = valueNodes.map((valueNode) => {
          const value = Value.fromValueNode(valueNode, context);

          return value;
        });

  return values;
}
