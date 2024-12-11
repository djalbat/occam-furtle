"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/parameter/@name"),
      typeTerminalNodeQuery = nodeQuery("/parameter/@type");

export default domAssigned(class Parameter {
  constructor(string, type, name) {
    this.string = string;
    this.type = type;
    this.name = name;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  matchType(type) {
    const typeMatches = (this.type === type);

    return typeMatches;
  }

  static name = "Parameter";

  static fromParameterNode(parameterNode, context) {
    const name = nameFromParameterNode(parameterNode, context),
          type = typeFromParameterNode(parameterNode, context),
          node = parameterNode, //
          string = context.nodeAsString(node),
          parameter = new Parameter(string, name, type);

    return parameter;
  }
});

function nameFromParameterNode(parameterNode, context) {
  const nameTerminalNode = nameTerminalNodeQuery(parameterNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

function typeFromParameterNode(parameterNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(parameterNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
