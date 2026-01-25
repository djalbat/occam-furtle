"use strict";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { nodeQuery } from "../../utilities/query";

const typeTerminalNodeQuery = nodeQuery("/namedParameter/@type"),
      nameTerminalNodeQuery = nodeQuery("/namedParameter/@name[0]"),
      asNameTerminalNodeQuery = nodeQuery("/namedParameter/@name[1]");

export default define(class NamedParameter {
  constructor(string, type, name, asName) {
    this.string = string;
    this.type = type;
    this.name = name;
    this.asName = asName;
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

  getAsName() {
    return this.asName;
  }

  matchExpression(expression, context) {
    const expressionString = expression.asString(context),
          namedParameterString = this.string;  ///

    context.trace(`Matching the ${expressionString} expression against the '${namedParameterString}' named parameter...`);

    const expressionType = expression.getType();

    if (this.type !== expressionType) {
      const message = `The ${expressionString} expression's '${expressionType}' type  and '${namedParameterString}' named parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the ${expressionString} expression against the '${namedParameterString}' named parameter.`);
  }

  matchNamedParameter(namedParameter, context) {
    let namedParameterMatches;

    const namedParameterA = this,  ///
          namedParameterB = namedParameter; ///

    const namedParameterAString = namedParameterA.getString(),
          namedParameterBString = namedParameterB.getString();

    context.trace(`Matching the '${namedParameterAString}' named parameter against the '${namedParameterBString}' named parameter...`);

    const name = namedParameter.getName(),
          type = namedParameter.getType();

    namedParameterMatches = ((this.name === name) && (this.type === type));

    if (namedParameterMatches) {
      context.debug(`...matched the '${namedParameterAString}' named parameter against the '${namedParameterBString}' named parameter.`);
    }

    return namedParameterMatches;
  }

  static name = "NamedParameter";

  static fromNamedParameterNode(namedParameterNode, context) {
    const namedParameter = namedParameterFromNamedParameterNode(namedParameterNode, context);

    return namedParameter;
  }
});

function namedParameterFromNamedParameterNode(namedParameterNode, context) {
  const { NamedParameter } = elements,
        type = typeFromNamedParameterNode(namedParameterNode, context),
        name = nameFromNamedParameterNode(namedParameterNode, context),
        asName = asNameFromNamedParameterNode(namedParameterNode, context),
        string = stringFromTypeNameAndAsName(type, name, asName, context),
        namedParameter = new NamedParameter(string, type, name, asName);

  return namedParameter;
}

function stringFromTypeNameAndAsName(type, name, asName, context) {
  let string;

  const typeString = type,  ///
        nameString = name;  ///

  string = `${typeString} ${nameString}`;

  if (asName !== null) {
    const asNameString = asName;  ///

    string = `${string} As ${asNameString}`;
  }

  return string;
}


function typeFromNamedParameterNode(namedParameterNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(namedParameterNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

function nameFromNamedParameterNode(namedParameterNode, context) {
  const nameTerminalNode = nameTerminalNodeQuery(namedParameterNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

function asNameFromNamedParameterNode(namedParameterNode, context) {
  let asName = null;

  const asNameTerminalNode = asNameTerminalNodeQuery(namedParameterNode);

  if (asNameTerminalNode !== null) {
    const asNameTerminalNodeContent = asNameTerminalNode.getContent();

    asName = asNameTerminalNodeContent; ///
  }

  return asName;
}
