"use strict";

import elements from "../elements";

import { termFromNode } from "../utilities/term";
import { termsStringFromTermsArray } from "../utilities/string";

export function termsFromNodes(nodes, context) {
  const { Terms } = elements,
        termsArray = termsArrayFromNodes(nodes, context),
        termsString = termsStringFromTermsArray(termsArray),
        string = termsString, ///
        array = termsArray, ///
        terms = new Terms(string, array);

  return terms;
}

export function termsFromExpression(term, context) {
  const { Primitives } = elements,
        termsArray = [
          term
        ],
        termsString = termsStringFromTermsArray(termsArray),
        string = termsString, ///
        array = termsArray, ///
        terms = new Primitives(string, array);

  return terms;
}

export default {
  termsFromNodes,
  termsFromExpression
};

function termsArrayFromNodes(nodes, context) {
  const termsArray = nodes.map((node) => { ///
    const term = termFromNode(node, context);

    return term;
  });

  return termsArray;
}

