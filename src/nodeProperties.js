"use strict";

import Exception from "./exception";
import NodeProperty from "./nodeProperty";

import { nodePropertiesStringFromNodePropertiesArray } from "./utilities/string";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME } from "./typeNames";
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

  compareNamedBinding(namedBinding, context) {
    const namedBindingString = namedBinding.getString(),
          nodePropertiesString = this.string; ///

    context.trace(`Comparing the '${namedBindingString}' named binding with the '${nodePropertiesString}' node properties...`);

    const namedBindingsCompare = this.someNodeProperty((nodeProperty) => {
      const namedBindingComparesToNodeProperty = nodeProperty.compareNamedBinding(namedBinding, context);

      if (namedBindingComparesToNodeProperty) {
        return true;
      }
    });

    if (!namedBindingsCompare) {
      const message = `The '${namedBindingString}' named binding does not compmare to any of the '${nodePropertiesString}' node properties.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...compared the '${namedBindingString}' named binding with the '${nodePropertiesString}' node properties.`);
  }

  compareNamedBindings(namedBindings, context) {
    namedBindings.forEachNamedBinding((namedBinding) => {
      this.compareNamedBinding(namedBinding, context);
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
          LIST_TYPE_NAME,
          STRING_TYPE_NAME,
          BOOLEAN_TYPE_NAME
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
