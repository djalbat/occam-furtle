"use strict";

import elements from "../elements";

import { termsStringFromTermsArray } from "../utilities/string";
import { termFromNode, termFromPrimitive } from "../utilities/term";

export function termsFromNodes(nodes, context) {
  const { Terms } = elements,
        termsArray = termsArrayFromNodes(nodes, context),
        termsString = termsStringFromTermsArray(termsArray),
        string = termsString, ///
        array = termsArray,  ///
        node = null;

  context = null;

  const terms = new Terms(context, string, node, array);

  return terms;
}

export function termsFromPrimitives(primitives) {
  const { Terms } = elements,
        termsArray = termsArrayFromPrimitives(primitives),
        termsString = termsStringFromTermsArray(termsArray),
        context = null,
        string = termsString, ///
        array = termsArray,  ///
        node = null,
        terms = new Terms(context, string, node, array);

  return terms;
}

export default {
  termsFromNodes,
  termsFromPrimitives
};

function termsArrayFromNodes(nodes, context) {
  const termsArray = nodes.map((node) => {
    const term = termFromNode(node, context);

    return term;
  });

  return termsArray;
}

function termsArrayFromPrimitives(primitives) {
  const termsArray = primitives.map((primitive) => {
    const term = termFromPrimitive(primitive);

    return term;
  });

  return termsArray;
}

