"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const referenceNameTerminalNodeQuery = nodeQuery("/reference/@name"),
      assignmentProcedureCallReferenceNameTerminalNodeQuery = nodeQuery("/assignment/procedureCall/reference/@name");

export default domAssigned(class Reference {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getString() {
    const string = this.name; ///

    return string;
  }

  static name = "Reference";

  static fromReferenceNode(referenceNode, context) {
    const name = nameFromReferenceNode(referenceNode),
          reference = new Reference(name);

    return reference;
  }

  static fromAssignmentNode(assignment, context) {
    const name = nameFromAssignmentNode(assignment),
          reference = new Reference(name);

    return reference;
  }
});

function nameFromReferenceNode(referenceNode) {
  const referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode),
        referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(),
        name = referenceNameTerminalNodeContent; ///

  return name;
}

function nameFromAssignmentNode(assignmentNode) {
  const assignmentProcedureCallReferenceNameTerminalNode = assignmentProcedureCallReferenceNameTerminalNodeQuery(assignmentNode),
        assignmentProcedureCallReferenceNameTerminalNodeContent = assignmentProcedureCallReferenceNameTerminalNode.getContent(),
        name = assignmentProcedureCallReferenceNameTerminalNodeContent; ///

  return name;
}

