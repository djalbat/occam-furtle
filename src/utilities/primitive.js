"use strict";

import elements from "../elements";

import { STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME, NOMINAL_VALUES_TYPE_NAME } from "../typeNames";
import { primtiveStringFromBoolean, primtiveStringFromNominalValue, primtiveStringFromNominalValues, primtiveStringFromStringLiteral } from "../utilities/string";

export function primitiveFromBoolean(boolean, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromBoolean(boolean),
        string = primitiveString,  ///
        type = BOOLEAN_TYPE_NAME,
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
        type = NOMINAL_VALUE_TYPE_NAME,
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
        type = NOMINAL_VALUES_TYPE_NAME,
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
        type = STRING_TYPE_NAME,
        value = stringLiteral,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}
