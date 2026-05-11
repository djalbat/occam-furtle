"use strict";

import elements from "../elements";

import { primitiveFromBoolean, primitiveFromStringLiteral } from "../utilities/primitive";

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
