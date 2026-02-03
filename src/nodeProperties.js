"use strict";

import Exception from "./exception";
import NodeProperty from "./nodeProperty";

import { NODES_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "./types";
import { nodePropertiesStringFromNodePropertiesArray } from "./utilities/string";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "./parameterNames";

class NodeProperties {
  constructor(string, array) {
    this.string = string;
    this.array = array;
  }

  getString() {
    return this.string;
  }

  getArray() {
    return this.array;
  }

  someNodeProperty(callback) { return this.array.some(callback); }

  matchNamedParameter(namedParameter, context) {
    const nodePropertiesString = this.string, ///
          namedParameterString = namedParameter.getString();

    context.trace(`Matching the '${namedParameterString}' named parameter against the '${nodePropertiesString}' node properties...`);

    const namedParameterMatches = this.someNodeProperty((nodeProperty) => {
      const namedParameterMatchesNodeProperty = nodeProperty.matchNamedParameter(namedParameter, context);

      if (namedParameterMatchesNodeProperty) {
        return true;
      }
    });

    if (!namedParameterMatches) {
      const message = `The '${namedParameterString}' named parameter does not match any of the '${nodePropertiesString}' node properties.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the '${namedParameterString}' named parameter against the '${nodePropertiesString}' node properties.`);
  }

  matchNamedParameters(namedParameters, context) {
    namedParameters.forEachNamedParameter((namedParameter) => {
      this.matchNamedParameter(namedParameter, context);
    });
  }

  static fromNothing() {
    const nodePropertiesArray = nodePropertiesArrayFromNothing(),
          string = nodePropertiesStringFromNodePropertiesArray(nodePropertiesArray),
          array = nodePropertiesArray,  ///
          nodeProperties = new NodeProperties(string, array);

    return nodeProperties;
  }
}

const nodeProperties = NodeProperties.fromNothing();

export default nodeProperties;

function nodePropertiesArrayFromNothing() {
  const types = [
          STRING_TYPE,
          BOOLEAN_TYPE,
          NODES_TYPE,
        ],
        names = [
          CONTENT_PARAMETER_NAME,
          TERMINAL_PARAMETER_NAME,
          CHILD_NODES_PARAMETER_NAME
        ],
        nodePropertiesArray = names.map((name, index) => {
          const type = types[index],
                nodeProperty = NodeProperty.fromNameAndType(name, type);

          return nodeProperty;
        });

  return nodePropertiesArray;
}
