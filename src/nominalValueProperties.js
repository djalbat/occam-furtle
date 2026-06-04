"use strict";

import elements from "./elements";
import Exception from "./exception";
import NominalValueProperty from "./nominalValueProperty";

import { nominalValuePropertiesStringFromNominalValuePropertiesArray } from "./utilities/string";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "./typeNames";
import { CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME, NO_WHITESPACE_PARAMETER_NAME } from "./parameterNames";

class NominalValueProperties {
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

  someNominalValueProperty(callback) { return this.array.some(callback); }

  compareNamedBinding(namedBinding, context) {
    const namedBindingString = namedBinding.getString(),
          nominalValuePropertiesString = this.string; ///

    context.trace(`Comparing the '${namedBindingString}' named binding with the '${nominalValuePropertiesString}' node properties...`);

    const namedBindingsCompare = this.someNominalValueProperty((nominalValueProperty) => {
      const namedBindingComparesToNominalValueProperty = nominalValueProperty.compareNamedBinding(namedBinding, context);

      if (namedBindingComparesToNominalValueProperty) {
        return true;
      }
    });

    if (!namedBindingsCompare) {
      const message = `The '${namedBindingString}' named binding does not compmare to any of the '${nominalValuePropertiesString}' node properties.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...compared the '${namedBindingString}' named binding with the '${nominalValuePropertiesString}' node properties.`);
  }

  compareNamedBindings(namedBindings, context) {
    namedBindings.forEachNamedBinding((namedBinding) => {
      this.compareNamedBinding(namedBinding, context);
    });
  }

  static fromNothing() {
    const nominalValuePropertiesArray = nominalValuePropertiesArrayFromNothing(),
          string = nominalValuePropertiesStringFromNominalValuePropertiesArray(nominalValuePropertiesArray),
          array = nominalValuePropertiesArray,  ///
          nominalValueProperties = new NominalValueProperties(string, array);

    return nominalValueProperties;
  }
}

const nominalValueProperties = NominalValueProperties.fromNothing();

export default nominalValueProperties;

function nominalValuePropertiesArrayFromNothing() {
  const names = [
          CONTENT_PARAMETER_NAME,
          TERMINAL_PARAMETER_NAME,
          NO_WHITESPACE_PARAMETER_NAME,
          CHILD_NODES_PARAMETER_NAME,
        ],
        typeNames = [
          STRING_TYPE_NAME,
          BOOLEAN_TYPE_NAME,
          BOOLEAN_TYPE_NAME,
          LIST_TYPE_NAME
        ],
        argumentTypeNames = [
          null,
          null,
          null,
          NOMINAL_VALUE_TYPE_NAME
        ],
        nominalValuePropertiesArray = names.map((name, index) => {
          const { Type } = elements,
                context = null,
                typeName = typeNames[index],
                argumentTypeName = argumentTypeNames[index],
                type = Type.fromTypeNameAndArgumentTypeName(typeName, argumentTypeName, context),
                nominalValueProperty = NominalValueProperty.fromNameAndType(name, type);

          return nominalValueProperty;
        });

  return nominalValuePropertiesArray;
}
