"use strict";

import Exception from "../exception";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const terminalNodesQuery = nodesQuery("/parameter/@*"),
      nameTerminalNodeQuery = nodeQuery("/parameter/@name"),
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

  matchValue(value, context) {
    const valueString = value.asString(context),
          parameterString = this.string;  ///

    context.trace(`Matching the ${valueString} value against the '${parameterString}' parameter...`);

    const valueType = value.getType();

    if (this.type !== valueType) {
      const message = `The ${valueString} value's '${valueType}' type  and '${parameterString}' parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the ${valueString} value against the '${parameterString}' parameter.`);
  }

  static name = "Parameter";

  static fromParameterNode(parameterNode, context) {
    let parameter = null;

    const terminalNodes = terminalNodesQuery(parameterNode),
          terminalNodesLength = terminalNodes.length;

    if (terminalNodesLength === 2) {
      const name = nameFromParameterNode(parameterNode, context),
            type = typeFromParameterNode(parameterNode, context),
            node = parameterNode, //
            string = context.nodeAsString(node);

      parameter = new Parameter(string, type, name);
    }

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
