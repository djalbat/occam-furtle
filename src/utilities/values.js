"use strict";

import elements from "../elements";

import { valueFromNominalValue } from "../utilities/value";
import { valuesStringFromValuesArray } from "../utilities/string";

export function valuesFromNominalValues(nominalValues) {
  const { Values } = elements,
        valuesArray = valuesArrayFromNominalValues(nominalValues),
        valuesString = valuesStringFromValuesArray(valuesArray),
        string = valuesString, ///
        array = valuesArray,  ///
        node = null,
        breakPoint = null,
        context = null,
        values = new Values(context, string, node, breakPoint, array);

  return values;
}

function valuesArrayFromNominalValues(nominalValues) {
  const valuesArray = nominalValues.map((nominalValue) => {
    const value = valueFromNominalValue(nominalValue);

    return value;
  });

  return valuesArray;
}
