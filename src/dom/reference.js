"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/reference/@name");

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
});

function nameFromReferenceNode(referenceNode) {
  const nameTerminalNode = nameTerminalNodeQuery(referenceNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

