"use strict";

import elements from "../elements";

import { primitiveFromNode, primitiveFromNodes, primitiveFromBoolean, primitiveFromStringLiteral } from "../utilities/primitive";

export function termFromNode(node, context) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromNode(node, context),
        string = primitive.getString(),
        term = new Term(string, variable, primitive);

  return term;
}

export function termFromNodes(nodes, context) {
  const { Expression } = elements,
        variable = null,
        primitive = primitiveFromNodes(nodes, context),
        string = primitive.getString(),
        term = new Expression(string, variable, primitive);

  return term;
}

export function termFromBoolean(boolean, context) {
  const { Expression } = elements,
        variable = null,
        primitive = primitiveFromBoolean(boolean, context),
        string = primitive.getString(),
        term = new Expression(string, variable, primitive);

  return term;
}

export function termFromStringLiteral(stringLiteral, context) {
  const { Expression } = elements,
        variable = null,
        primitive = primitiveFromStringLiteral(stringLiteral, context),
        string = primitive.getString(),
        term = new Expression(string, variable, primitive);

  return term;
}
