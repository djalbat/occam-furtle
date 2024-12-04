"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const typeTerminalNodeQuery = nodeQuery("/procedureDeclaration/@type");

export default domAssigned(class Procedure {
  constructor(type, label, args) {
    this.type = type;
    this.label = label;
    this.arguments = _arguments;  ///
  }

  getType() {
    return this.type;
  }

  getLabel() {
    return this.label;
  }

  getString() {
    const typeString = this.type, ///
          labelString = this.label.getString(),
          string = `${typeString} ${labelString}`;

    return string;
  }

  static name = "Procedure";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Label } = dom,
          type = typeFromProcedureDeclarationNode(procedureDeclarationNode),
          label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          procedureDeclaration = new Procedure(type, label);

    return procedureDeclaration;
  }
});

function typeFromProcedureDeclarationNode(procedureDeclarationNode) {
  const typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
