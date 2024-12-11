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

  static fromParameterNode(parameterNode) {
    const name = nameFromParameterNode(parameterNode),
          type = typeFromParameterNode(parameterNode),
          string = stringFromTypeAndName(type, name),
          parameter = new Parameter(string, name, type);

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

function stringFromTypeAndName(type, name) {
  const string = `${type} ${name}`;

  return string;
}

