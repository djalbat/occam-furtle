"use strict";

import elements from "../elements";

import { STRING_TYPE, BOOLEAN_TYPE, NOMINAL_VALUE_TYPE, NOMINAL_VALUES_TYPE } from "../types";
import { primtiveStringFromBoolean, primtiveStringFromNominalValue, primtiveStringFromNominalValues, primtiveStringFromStringLiteral } from "../utilities/string";

export function primitiveFromBoolean(boolean, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromBoolean(boolean),
        string = primitiveString,  ///
        type = BOOLEAN_TYPE,
        value = boolean,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromNominalValue(nominalValue) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNominalValue(nominalValue),
        string = primitiveString,  ///
        type = NOMINAL_VALUE_TYPE,
        value = nominalValue, ///
        breakPoint = null,
        node = null,
        context = null,
        primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromNominalValues(nominalValues) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNominalValues(nominalValues),
        string = primitiveString,  ///
        type = NOMINAL_VALUES_TYPE,
        value = nominalValues,  ///
        node = null,
        breakPoint = null,
        context = null,
        primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromStringLiteral(stringLiteral, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromStringLiteral(stringLiteral),
        string = primitiveString,  ///
        type = STRING_TYPE,
        value = stringLiteral,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}
