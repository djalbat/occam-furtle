"use strict";

import { nodePropertyStringFromNameAndType } from "./utilities/string";

export default class NodeProperty {
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

  matchNamedParameter(namedParameter, context) {
    let namedParameterMatches;

    const nodePropertyString = this.string, ///
          namedParameterString = namedParameter.getString();

    context.trace(`Matching the '${nodePropertyString}' node property against the '${namedParameterString}' named parameter...`);

    const name = namedParameter.getName(),
          type = namedParameter.getType();

    namedParameterMatches = ((this.name === name) && (this.type === type));

    if (namedParameterMatches) {
      context.debug(`...matched the '${nodePropertyString}' node property against the '${namedParameterString}' named parameter.`);
    }

    return namedParameterMatches;
  }

  static name = "Parameter";

  static fromNameAndType(name, type) {
    const nodePropertyString = nodePropertyStringFromNameAndType(name, type),
          string = nodePropertyString,  ///
          nodeProperty = new NodeProperty(string, type, name);

    return nodeProperty;
  }
};
