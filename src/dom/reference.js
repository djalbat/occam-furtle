"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const procedureCallReferenceNodeQuery = nodeQuery("/procedureCall/reference!"),
      referenceNameTerminalNodeQuery = nodeQuery("/reference/@name");

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
    const reference = referenceFromReferenceNode(referenceNode, context);

    return reference;
  }

  static fromProcedureCallNode(procedureCallNode, context) {
    const procedureCallReferenceNod = procedureCallReferenceNodeQuery(procedureCallNode),
          referenceNode = procedureCallReferenceNod,  ///
          reference = referenceFromReferenceNode(referenceNode, context);

    return reference;
  }
});

function referenceFromReferenceNode(referenceNode, context) {
  const { Reference } = dom,
        name = nameFromReferenceNode(referenceNode, context),
        string = stringFromName(name, context),
        reference = new Reference(string, name);

  return reference;
}

function nameFromReferenceNode(referenceNode, context) {
  const referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode),
        referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(),
        name = referenceNameTerminalNodeContent; ///

  return name;
}

function stringFromName(name, context) {
  const nameString = name,  ///
        string = nameString;  ///

  return string;
}
