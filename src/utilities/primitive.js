"use strict";

import elements from "../elements";

import { primtiveStringFromNode, primtiveStringFromNodes, primtiveStringFromBoolean, primtiveStringFromStringLiteral } from "../utilities/string";

export function primitiveFromNode(node, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNode(node, context),
        string = primitiveString,  ///
        nodes = null,
        number = null,
        boolean = null,
        stringLiteral = null,
        primitive = new Primitive(string, node, nodes, number, boolean, stringLiteral);

  return primitive;
}

export function primitiveFromNodes(nodes, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromNodes(nodes, context),
        string = primitiveString,  ///
        node = null,
        number = null,
        boolean = null,
        stringLiteral = null,
        primitive = new Primitive(string, node, nodes, number, boolean, stringLiteral);

  return primitive;
}

export function primitiveFromBoolean(boolean, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromBoolean(boolean),
        string = primitiveString,  ///
        node = null,
        nodes = null,
        number = null,
        stringLiteral = null,
        primitive = new Primitive(string, node, nodes, number, boolean, stringLiteral);

  return primitive;
}

export function primitiveFromStringLiteral(stringLiteral, context) {
  const { Primitive } = elements,
        primitiveString = primtiveStringFromStringLiteral(stringLiteral),
        string = primitiveString,  ///
        node = null,
        nodes = null,
        number = null,
        boolean = null,
        primitive = new Primitive(string, node, nodes, number, boolean, stringLiteral);

  return primitive;
}
