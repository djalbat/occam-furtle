"use strict";

import elements from "../elements";

import { valueFromNominalValue } from "../utilities/value";
import { valuesStringFromValuesArray } from "../utilities/string";

export function valuesFromNominalValues(nominalValues, context) {
  const { Values } = elements,
        valuesArray = valuesArrayFromNominalValues(nominalValues, context),
        valuesString = valuesStringFromValuesArray(valuesArray),
        string = valuesString, ///
        array = valuesArray,  ///
        node = null,
        breakPoint = null,
        values = new Values(context, string, node, breakPoint, array);

  return values;
}

function valuesArrayFromNominalValues(nominalValues, context) {
  const valuesArray = nominalValues.map((nominalValue) => {
    const value = valueFromNominalValue(nominalValue, context);

    return value;
  });

  return valuesArray;
}
