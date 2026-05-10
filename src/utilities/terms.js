"use strict";

import elements from "../elements";

import { termFromNode } from "../utilities/term";
import { termsStringFromTermsArray } from "../utilities/string";

export function termsFromNodes(nodes, context) {
  const { Terms } = elements,
        termsArray = termsArrayFromNodes(nodes, context),
        termsString = termsStringFromTermsArray(termsArray),
        string = termsString, ///
        array = termsArray,  ///
        node = null,
        breakPoint = null;

  context = null;

  const terms = new Terms(context, string, node, breakPoint, array);

  return terms;
}

function termsArrayFromNodes(nodes, context) {
  const termsArray = nodes.map((node) => {
    const term = termFromNode(node, context);

    return term;
  });

  return termsArray;
}
