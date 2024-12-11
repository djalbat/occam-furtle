"use strict";

import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nameTerminalNodeQuery = nodeQuery("/parameter/@name"),
      typeTerminalNodeQuery = nodeQuery("/parameter/@type");

export default domAssigned(class Parameter {
  constructor(string, name, type) {
    this.string = string;
    this.name = name;
    this.type = type;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  matchValue(value, context) {
    const valueString = value.getString(),
          parameterString = this.getString();

    context.trace(`Matching the '${valueString}' value against the '${parameterString}' parameter...`);

    const valueType = value.getType();

    if (this.type !== valueType) {
      const message = `The types of the '${valueString}' value and '${parameterString}' parameter do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the '${valueString}' value against the '${parameterString}' parameter.`);
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
