"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const referenceNameTerminalNodeQuery = nodeQuery("/reference/@name"),
      assignmentProcedureCallReferenceNodeQuery = nodeQuery("/assignment/procedureCall/reference");

export default domAssigned(class Reference {
  constructor(string, name) {
    this.string = string;
    this.name = name;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  static name = "Reference";

  static fromReferenceNode(referenceNode, context) {
    const node = referenceNode, ///
          string = context.nodeAsString(node),
          name = nameFromReferenceNode(referenceNode, context),
          reference = new Reference(string, name);

    return reference;
  }

  static fromAssignmentNode(assignmentNode, context) {
    const assignmentProcedureCallReferenceNod = assignmentProcedureCallReferenceNodeQuery(assignmentNode),
          referenceNode = assignmentProcedureCallReferenceNod,
          node = referenceNode, ///
          string = context.nodeAsString(node),
          name = nameFromReferenceNode(referenceNode, context),
          reference = new Reference(string, name);

    return reference;
  }
});

function nameFromReferenceNode(referenceNode, context) {
  const referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode),
        referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(),
        name = referenceNameTerminalNodeContent; ///

  return name;
}
