"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const labelNodeQuery = nodeQuery("/procedureDeclaration/label"),
      nameTerminalNodeQuery = nodeQuery("/label/@name");

export default domAssigned(class Label {
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

  matchName(name) {
    const nameMatches = (name === this.name);

    return nameMatches;
  }

  static name = "Label";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const node = procedureDeclarationNode,  ///
          string = context.nodeAsString(node),
          labelNode = labelNodeQuery(procedureDeclarationNode),
          name = nameFromLabelNode(labelNode, context),
          label = new Label(string, name);

    return label;
  }
});

function nameFromLabelNode(labelNode, context) {
  const nameTerminalNode = nameTerminalNodeQuery(labelNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

