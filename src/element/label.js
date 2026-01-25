"use strict";

import elements from "../elements";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";

const nameTerminalNodeQuery = nodeQuery("/label/@name"),
      procedureDeclarationLabelNodeQuery = nodeQuery("/procedureDeclaration/label");

export default define(class Label {
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
  const { Label } = elements,
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

