"use strict";

import Exception from "../../exception";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const terminalNodesQuery = nodesQuery("/namedParameter/@*"),
      nameTerminalNodeQuery = nodeQuery("/namedParameter/@name"),
      typeTerminalNodeQuery = nodeQuery("/namedParameter/@type");

export default domAssigned(class NamedParameter {
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
    const valueString = value.asString(context),
          namedParameterString = this.string;  ///

    context.trace(`Matching the ${valueString} value against the '${namedParameterString}' namedParameter...`);

    const valueType = value.getType();

    if (this.type !== valueType) {
      const message = `The ${valueString} value's '${valueType}' type  and '${namedParameterString}' namedParameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the ${valueString} value against the '${namedParameterString}' namedParameter.`);
  }

  matchNamedParameter(namedParameter, context) {
    let namedParameterMatches;

    const namedParameterA = this,  ///
          namedParameterB = namedParameter; ///

    const namedParameterAString = namedParameterA.getString(),
          namedParameterBString = namedParameterB.getString();

    context.trace(`Matching the '${namedParameterAString}' namedParameter against the '${namedParameterBString}' namedParameter...`);

    const name = namedParameter.getName(),
          type = namedParameter.getType();

    namedParameterMatches = ((this.name === name) && (this.type === type));

    if (namedParameterMatches) {
      context.debug(`...matched the '${namedParameterAString}' namedParameter against the '${namedParameterBString}' namedParameter.`);
    }

    return namedParameterMatches;
  }

  static name = "NamedParameter";

  static fromNameAndType(name, type, context) {
    const string = stringFromNameAndType(name, type, context),
          namedParameter = new NamedParameter(string, name, type);

    return namedParameter;
  }

  static fromNamedParameterNode(namedParameterNode, context) {
    let namedParameter = null;

    const terminalNodes = terminalNodesQuery(namedParameterNode),
          terminalNodesLength = terminalNodes.length;

    if (terminalNodesLength === 2) {
      const name = nameFromNamedParameterNode(namedParameterNode, context),
            type = typeFromNamedParameterNode(namedParameterNode, context),
            node = namedParameterNode, //
            string = context.nodeAsString(node);

      namedParameter = new NamedParameter(string, name, type);
    }

    return namedParameter;
  }
});

function stringFromNameAndType(name, type) {
  const string = `${type} ${name}`;

  return string;
}

function nameFromNamedParameterNode(namedParameterNode, context) {
  const nameTerminalNode = nameTerminalNodeQuery(namedParameterNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

function typeFromNamedParameterNode(namedParameterNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(namedParameterNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
