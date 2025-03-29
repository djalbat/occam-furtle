"use strict";

import dom from "../dom";
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

  matchExpression(expression, context) {
    const expressionString = expression.asString(context),
          parameterString = this.string;  ///

    context.trace(`Matching the ${expressionString} expression against the '${parameterString}' parameter...`);

    const expressionType = expression.getType();

    if (this.type !== expressionType) {
      const message = `The ${expressionString} expression's '${expressionType}' type  and '${parameterString}' parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the ${expressionString} expression against the '${parameterString}' parameter.`);
  }

  static name = "Parameter";

  static fromParameterNode(parameterNode, context) {
    let parameter = null;

    const terminalNodes = terminalNodesQuery(parameterNode),
          terminalNodesLength = terminalNodes.length;

    if (terminalNodesLength === 2) {
      parameter = parameterFromParameterNode(parameterNode, context);
    }

    return parameter;
  }
});

function parameterFromParameterNode(parameterNode, context) {
  const { Parameter } = dom,
        name = nameFromParameterNode(parameterNode, context),
        type = typeFromParameterNode(parameterNode, context),
        string = stringFromNameAndType(name, type, context),
        parameter = new Parameter(string, type, name);

  return parameter;
}

function stringFromNameAndType(name, type, context) {
  const nameString = name,  ///
        typeString = type,  ///
        string = `${typeString} ${nameString}`;

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
