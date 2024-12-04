"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const typeTerminalNodeQuery = nodeQuery("/argument/@type");

export default domAssigned(class Argument {
  constructor(type, variable) {
    this.type = type;
    this.variable = variable;
  }

  getType() {
    return this.type;
  }

  getVariable() {
    return this.variable;
  }

  getString() {
    const typeString = this.type, ///
          variableString = this.variable.getString(),
          string = `${typeString} ${variableString}`;

    return string;
  }

  static name = "Argument";

  static fromArgumentNode(argumentNode, context) {
    const { Variable } = dom,
          type = typeFromArgumentNode(argumentNode),
          variable = Variable.fromArgumentNode(argumentNode, context),
          argument = new Argument(type, variable);

    return argument;
  }
});

function typeFromArgumentNode(argumentNode) {
  const typeTerminalNode = typeTerminalNodeQuery(argumentNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
