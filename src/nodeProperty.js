"use strict";

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

    const nodePropertyString = this.getString(), ///
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

  static fromNameAndType(name, type, context) {
    const string = stringFromNameAndType(name, type, context),
          nodeProperty = new NodeProperty(string, type, name);

    return nodeProperty;
  }
};

function stringFromNameAndType(name, type, context) {
  const typeString = type,  ///
        nameString = name,  ///
        string = `${typeString} ${nameString}`;

  return string;
}
