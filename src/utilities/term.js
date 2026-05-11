"use strict";

import elements from "../elements";

import { primitiveFromBoolean, primitiveFromNominalValue, primitiveFromNominalValues, primitiveFromStringLiteral } from "../utilities/primitive";

export function termFromPrimitive(primitive) {
  const { Term } = elements,
        context = null,
        string = primitive.getString(),
        node = null,
        breakPoint = null,
        variable = null,
        term = new Term(context, string, node, breakPoint, variable, primitive);

  return term;
}

export function termFromBoolean(boolean, context) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromBoolean(boolean, context),
        string = primitive.getString(),
        node = null,
        breakPoint = null;

  context = null;

  const term = new Term(context, string, node, breakPoint, variable, primitive);

  return term;
}

export function termFromNominalValue(nominalValue) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromNominalValue(nominalValue),
        string = primitive.getString(),
        breakPoint = null,
        node = null,
        context = null,
        term = new Term(context, string, node, breakPoint, variable, primitive);

  return term;
}

export function termFromNominalValues(nominalValues) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromNominalValues(nominalValues),
        string = primitive.getString(),
        node = null,
        breakPoint = null,
        context = null,
        term = new Term(context, string, node, breakPoint, variable, primitive);

  return term;
}

export function termFromStringLiteral(stringLiteral, context) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromStringLiteral(stringLiteral, context),
        string = primitive.getString(),
        node = null,
        breakPoint = null;

  context = null;

  const term = new Term(context, string, node, breakPoint, variable, primitive);

  return term;
}

export default {
  termFromBoolean,
  termFromNominalValue,
  termFromNominalValues,
  termFromStringLiteral,
  termFromPrimitive
};
