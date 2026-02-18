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

  compareNamedParameter(namedParameter, context) {
    let namedParameterCompares;

    const nodePropertyString = this.string, ///
          namedParameterString = namedParameter.getString();

    context.trace(`Comparing the '${nodePropertyString}' node property with the '${namedParameterString}' named parameter...`);

    const name = namedParameter.getName(),
          type = namedParameter.getType();

    namedParameterCompares = ((this.name === name) && (this.type === type));

    if (namedParameterCompares) {
      context.debug(`...compared the '${nodePropertyString}' node property with the '${namedParameterString}' named parameter.`);
    }

    return namedParameterCompares;
  }

  static name = "Parameter";

  static fromNameAndType(name, type) {
    const nodePropertyString = nodePropertyStringFromNameAndType(name, type),
          string = nodePropertyString,  ///
          nodeProperty = new NodeProperty(string, type, name);

    return nodeProperty;
  }
};
