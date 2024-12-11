"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const referenceNameTerminalNodeQuery = nodeQuery("/reference/@name"),
      assignmentProcedureCallReferenceNodeQuery = nodeQuery("/assignment/procedureCall/reference");

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

  static fromReferenceNode(referenceNode) {
    const name = nameFromReferenceNode(referenceNode),
          reference = new Reference(name);

    return reference;
  }

  static fromAssignmentNode(assignmentNode) {
    const assignmentProcedureCallReferenceNod = assignmentProcedureCallReferenceNodeQuery(assignmentNode),
          referenceNode = assignmentProcedureCallReferenceNod,
          name = nameFromReferenceNode(referenceNode),
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
