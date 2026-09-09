"use strict";

import { continuationUtilities } from "occam-languages";

import elements from "./elements";
import Exception from "./exception";
import NominalValueProperty from "./nominalValueProperty";

import { nominalValuePropertiesStringFromNominalValuePropertiesArray } from "./utilities/string";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "./typeNames";
import { TYPE_PARAMETER_NAME, CONTENT_PARAMETER_NAME, TERMINAL_PARAMETER_NAME, CHILD_NODES_PARAMETER_NAME, NO_WHITESPACE_PARAMETER_NAME } from "./parameterNames";

const { some } = continuationUtilities;

const properties = [
  {
    name: TYPE_PARAMETER_NAME,
    typeName: STRING_TYPE_NAME
  },
  {
    name: CONTENT_PARAMETER_NAME,
    typeName: STRING_TYPE_NAME
  },
  {
    name: TERMINAL_PARAMETER_NAME,
    typeName: BOOLEAN_TYPE_NAME
  },
  {
    name: NO_WHITESPACE_PARAMETER_NAME,
    typeName: BOOLEAN_TYPE_NAME
  },
  {
    name: CHILD_NODES_PARAMETER_NAME,
    typeName: LIST_TYPE_NAME,
    argumentTypeName: NOMINAL_VALUE_TYPE_NAME
  }
];

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

  someNominalValueProperty(callback, forward, back) {
    return some(this.array, callback, forward, back);
  }

  compareNamedBinding(namedBinding, context, forward, back) {
    const namedBindingString = namedBinding.getString(),
          nominalValuePropertiesString = this.string; ///

    context.trace(`Comparing the '${namedBindingString}' named binding with the '${nominalValuePropertiesString}' node properties...`);

    return this.someNominalValueProperty((nominalValueProperty, forward, back) => {
      return nominalValueProperty.compareNamedBinding(namedBinding, context, forward, back);
    }, (back) => {
      context.debug(`...compared the '${namedBindingString}' named binding with the '${nominalValuePropertiesString}' node properties.`);

      return forward(back);
    }, () => {
      const message = `The '${namedBindingString}' named binding does not compare to any of the '${nominalValuePropertiesString}' node properties.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    });
  }

  compareNamedBindings(namedBindings, context, forward, back) {
    return namedBindings.forEachNamedBinding((namedBinding, forward, back) => {
      return this.compareNamedBinding(namedBinding, context, forward, back);
    }, forward, back);
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
  const nominalValuePropertiesArray = properties.map((property) => {
          const name = nameFromProperty(property),
                type = typeFromProperty(property),
                nominalValueProperty = NominalValueProperty.fromNameAndType(name, type);

          return nominalValueProperty;
        });

  return nominalValuePropertiesArray;
}

function nameFromProperty(property) {
  const { name } = property;

  return name;
}

function typeFromProperty(property) {
  const { typeName, argumentTypeName = null } = property,
        { Type } = elements,
        context = null,
        type = Type.fromTypeNameAndArgumentTypeName(typeName, argumentTypeName, context);

  return type;
}
