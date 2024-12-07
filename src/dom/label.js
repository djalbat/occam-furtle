"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const labelNodeQuery = nodeQuery("/procedureDeclaration/label"),
      nameTerminalNodeQuery = nodeQuery("/label/@name");

export default domAssigned(class Label {
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

  static name = "Label";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const labelNode = labelNodeQuery(procedureDeclarationNode),
          name = nameFromLabelNode(labelNode),
          label = new Label(name);

    return label;
  }
});

function nameFromLabelNode(labelNode) {
  const nameTerminalNode = nameTerminalNodeQuery(labelNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

