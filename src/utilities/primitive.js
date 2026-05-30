"use strict";

import elements from "../elements";

import { typeFromTypeName } from "../utilities/element";
import { STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME, LIST_TYPE_NAME } from "../typeNames";
import { primtiveStringFromBoolean, primtiveStringFromNominalValue, primtiveStringFromNominalValues, primtiveStringFromStringLiteral } from "../utilities/string";

export function primitiveFromList(list, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNominalValues(list),
        string = primitiveString,  ///
        typeName = LIST_TYPE_NAME,
        type = typeFromTypeName(typeName, context),
        value = list,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

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

export function primitiveFromNominalValue(nominalValue, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNominalValue(nominalValue),
        string = primitiveString,  ///
        typeName = NOMINAL_VALUE_TYPE_NAME,
        type = typeFromTypeName(typeName, context),
        value = nominalValue, ///
        breakPoint = null,
        node = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}

export function primitiveFromStringLiteral(stringLiteral, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromStringLiteral(stringLiteral),
        string = primitiveString,  ///
        typeName = STRING_TYPE_NAME,
        type = typeFromTypeName(typeName, context),
        value = stringLiteral,  ///
        node = null,
        breakPoint = null;

  context = null;

  const primitive = new Primitive(context, string, node, breakPoint, type, value);

  return primitive;
}
