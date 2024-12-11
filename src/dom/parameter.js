"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/parameter/@name"),
      typeTerminalNodeQuery = nodeQuery("/parameter/@type");

export default domAssigned(class Parameter {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getString() {
    const string = `${this.type} ${this.name}`;

    return string;
  }

  matchType(type) {
    const typeMatches = (this.type === type);

    return typeMatches;
  }

  static name = "Parameter";

  static fromParameterNode(parameterNode, context) {
    const name = nameFromParameterNode(parameterNode),
          type = typeFromParameterNode(parameterNode),
          parameter = new Parameter(name, type);

    return parameter;
  }
});


function nameFromParameterNode(parameterNode) {
  const nameTerminalNode = nameTerminalNodeQuery(parameterNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

function typeFromParameterNode(parameterNode) {
  const typeTerminalNode = typeTerminalNodeQuery(parameterNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
