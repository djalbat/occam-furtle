"use strict";

import elements from "../elements";

import { NODE_TYPE, NODES_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";
import { primtiveStringFromNode, primtiveStringFromNodes, primtiveStringFromBoolean, primtiveStringFromStringLiteral } from "../utilities/string";

export function primitiveFromNode(node, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNode(node, context),
        string = primitiveString,  ///
        type = NODE_TYPE,
        value = node; ///

  node = null;

  context = null;

  const primitive = new Primitive(context, string, node, type, value);

  return primitive;
}

export function primitiveFromNodes(nodes, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNodes(nodes, context),
        string = primitiveString,  ///
        type = NODES_TYPE,
        value = nodes,  ///
        node = null;

  context = null;

  const primitive = new Primitive(context, string, node, type, value);

  return primitive;
}

export function primitiveFromBoolean(boolean, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromBoolean(boolean),
        string = primitiveString,  ///
        type = BOOLEAN_TYPE,
        value = boolean,  ///
        node = null;

  context = null;

  const primitive = new Primitive(context, string, node, type, value);

  return primitive;
}

export function primitiveFromStringLiteral(stringLiteral, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromStringLiteral(stringLiteral),
        string = primitiveString,  ///
        type = STRING_TYPE,
        value = stringLiteral,  ///
        node = null;

  context = null;

  const primitive = new Primitive(context, string, node, type, value);

  return primitive;
}
