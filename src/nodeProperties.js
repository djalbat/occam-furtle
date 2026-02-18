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

  compareNamedParameter(namedParameter, context) {
    const nodePropertiesString = this.string, ///
          namedParameterString = namedParameter.getString();

    context.trace(`Comparing the '${namedParameterString}' named parameter with the '${nodePropertiesString}' node properties...`);

    const namedParametersCompare = this.someNodeProperty((nodeProperty) => {
      const namedParameterComparesToNodeProperty = nodeProperty.compareNamedParameter(namedParameter, context);

      if (namedParameterComparesToNodeProperty) {
        return true;
      }
    });

    if (!namedParametersCompare) {
      const message = `The '${namedParameterString}' named parameter does not compmare to any of the '${nodePropertiesString}' node properties.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...compared the '${namedParameterString}' named parameter with the '${nodePropertiesString}' node properties.`);
  }

  compareNamedParameters(namedParameters, context) {
    namedParameters.forEachNamedParameter((namedParameter) => {
      this.compareNamedParameter(namedParameter, context);
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
