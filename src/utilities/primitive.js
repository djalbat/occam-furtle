"use strict";

import elements from "../elements";

import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, INTEGER_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../typeNames";
import { primtiveStringFromBoolean, primtiveStringFromInteger, primtiveStringFromNominalValue, primtiveStringFromNominalValues, primtiveStringFromStringLiteral } from "../utilities/string";

export function primitiveFromBoolean(boolean, context) {
  const { Type, Primitive } = elements,
        primitiveString = primtiveStringFromBoolean(boolean),
        string = primitiveString,  ///
        typeName = BOOLEAN_TYPE_NAME,
        type = Type.fromTypeName(typeName, context),
        value = boolean,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromInteger(integer, context) {
  const { Type, Primitive } = elements,
        primitiveString = primtiveStringFromInteger(integer),
        string = primitiveString,  ///
        typeName = INTEGER_TYPE_NAME,
        type = Type.fromTypeName(typeName, context),
        value = integer,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromNominalValue(nominalValue, context) {
  const { Type, Primitive } = elements,
        primitiveString = primtiveStringFromNominalValue(nominalValue),
        string = primitiveString,  ///
        typeName = NOMINAL_VALUE_TYPE_NAME,
        type = Type.fromTypeName(typeName, context),
        value = nominalValue, ///
        breakPoint = null,
        node = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromStringLiteral(stringLiteral, context) {
  const { Type, Primitive } = elements,
        primitiveString = primtiveStringFromStringLiteral(stringLiteral),
        string = primitiveString,  ///
        typeName = STRING_TYPE_NAME,
        type = Type.fromTypeName(typeName, context),
        value = stringLiteral,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromNominalValues(nominalValues, context) {
  const { Type, Primitive } = elements,
        primitiveString = primtiveStringFromNominalValues(nominalValues),
        string = primitiveString,  ///
        argumentTypeName = NOMINAL_VALUE_TYPE_NAME,
        typeName = LIST_TYPE_NAME,
        type = Type.fromTypeNameAndArgumentTypeName(typeName, argumentTypeName, context),
        value = nominalValues,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}
