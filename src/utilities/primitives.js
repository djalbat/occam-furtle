"use strict";

import elements from "../elements";

import { primitiveFromNode } from "../utilities/primitive";
import { primitivesStringFromPrimitivesArray } from "../utilities/string";

export function primitivesFromNodes(nodes, context) {
  const { Primitives } = elements,
        primitivesArray = primitivesArrayFromNodes(nodes, context),
        primitivesString = primitivesStringFromPrimitivesArray(primitivesArray),
        string = primitivesString, ///
        array = primitivesArray, ///
        primitives = new Primitives(string, array);

  return primitives;
}

export function primitivesFromExpression(primitive, context) {
  const { Primitives } = elements,
        primitivesArray = [
          primitive
        ],
        primitivesString = primitivesStringFromPrimitivesArray(primitivesArray),
        string = primitivesString, ///
        array = primitivesArray, ///
        primitives = new Primitives(string, array);

  return primitives;
}

export default {
  primitivesFromNodes,
  primitivesFromExpression
};

function primitivesArrayFromNodes(nodes, context) {
  const primitivesArray = nodes.map((node) => { ///
    const primitive = primitiveFromNode(node, context);

    return primitive;
  });

  return primitivesArray;
}

