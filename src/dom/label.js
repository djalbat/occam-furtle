"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/label/@name"),
      procedureDeclarationLabelNodeQuery = nodeQuery("/procedureDeclaration/label");

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
    const procedureDeclarationLabelNode = procedureDeclarationLabelNodeQuery(procedureDeclarationNode),
          labelNode = procedureDeclarationLabelNode,  ///
          label = labelFromLabelNode(labelNode, context);

    return label;
  }
});

function labelFromLabelNode(labelNode, context) {
  const { Label } = dom,
        name = nameFromLabelNode(labelNode, context),
        string = stringFromName(name, context),
        label = new Label(string, name);

  return label;
}

function nameFromLabelNode(labelNode, context) {
  const nameTerminalNode = nameTerminalNodeQuery(labelNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

function stringFromName(name, context) {
  const nameString = name,  ///
        string = nameString;  ///

  return string;
}

