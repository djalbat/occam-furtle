"use strict";

import Exception from "./exception";
import NodeProperty from "./nodeProperty";

import { stringFromArray } from "./dom/parameters";
import { NODES_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "./types";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME } from "./parameterNames";

const types = [
        STRING_TYPE,
        BOOLEAN_TYPE,
        NODES_TYPE,
      ],
      names = [
        CONTENT_PARAMETER_NAME,
        TERMINAL_PARAMETER_NAME,
        CHILD_NODES_PARAMETER_NAME
      ];

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
    const context = null,
          array = names.map((name, index) => {
            const type = types[index],
                  nodeProperty = NodeProperty.fromNameAndType(name, type, context);

            return nodeProperty;
          }),
          string = stringFromArray(array, context),
          nodeProperties = new NodeProperties(string, array);

    return nodeProperties;
  }
}

const nodeProperties = NodeProperties.fromNothing();

export default nodeProperties;
