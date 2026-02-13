"use strict";

import elements from "../elements";

import { primitiveFromNode, primitiveFromNodes, primitiveFromBoolean, primitiveFromStringLiteral } from "../utilities/primitive";

export function termFromNode(node, context) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromNode(node, context),
        string = primitive.getString();

  node = null;

  context = null;

  const term = new Term(context, string, node, variable, primitive);

  return term;
}

export function termFromNodes(nodes, context) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromNodes(nodes, context),
        string = primitive.getString(),
        node = null;

  context = null;

  const term = new Term(context, string, node, variable, primitive);

  return term;
}

export function termFromBoolean(boolean, context) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromBoolean(boolean, context),
        string = primitive.getString(),
        node = null;

  context = null;

  const term = new Term(context, string, node, variable, primitive);

  return term;
}

export function termFromStringLiteral(stringLiteral, context) {
  const { Term } = elements,
        variable = null,
        primitive = primitiveFromStringLiteral(stringLiteral, context),
        string = primitive.getString(),
        node = null;

  context = null;

  const term = new Term(context, string, node, variable, primitive);

  return term;
}

export function termFromPrimitive(primitive) {
  const { Term } = elements,
        context = null,
        string = primitive.getString(),
        node = null,
        variable = null,
        term = new Term(context, string, node, variable, primitive);

  return term;
}

export default {
  termFromNode,
  termFromNodes,
  termFromBoolean,
  termFromStringLiteral,
  termFromPrimitive
};
