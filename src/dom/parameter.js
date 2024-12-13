"use strict";

import Exception from "../exception";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const terminalNodesQuery = nodesQuery("/parameter/@*"),
      nameTerminalNodeQuery = nodeQuery("/parameter/@name"),
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
          parameterString = this.string;  ///

    context.trace(`Matching the '${valueString}' value against the '${parameterString}' parameter...`);

    const valueType = value.getType();

    if (this.type !== valueType) {
      const message = `The types of the '${valueString}' value and '${parameterString}' parameter do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the '${valueString}' value against the '${parameterString}' parameter.`);
  }

  matchParameter(parameter, context) {
    let parameterMatches;

    const parameterA = this,  ///
          parameterB = parameter; ///

    const parameterAString = parameterA.getString(),
          parameterBString = parameterB.getString();

    context.trace(`Matching the '${parameterAString}' parameter against the '${parameterBString}' parameter...`);

    const name = parameter.getName(),
          type = parameter.getType();

    parameterMatches = ((this.name === name) && (this.type === type));

    if (parameterMatches) {
      context.debug(`...matched the '${parameterAString}' parameter against the '${parameterBString}' parameter.`);
    }

    return parameterMatches;
  }

  static name = "Parameter";

  static fromNameAndType(name, type, context) {
    const string = stringFromNameAndType(name, type, context),
          parameter = new Parameter(string, name, type);

    return parameter;
  }

  static fromParameterNode(parameterNode, context) {
    let parameter = null;

    const terminalNodes = terminalNodesQuery(parameterNode),
          terminalNodesLength = terminalNodes.length;

    if (terminalNodesLength === 2) {
      const name = nameFromParameterNode(parameterNode, context),
            type = typeFromParameterNode(parameterNode, context),
            node = parameterNode, //
            string = context.nodeAsString(node);

      parameter = new Parameter(string, name, type);
    }

    return parameter;
  }
});

function stringFromNameAndType(name, type) {
  const string = `${type} ${name}`;

  return string;
}

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
