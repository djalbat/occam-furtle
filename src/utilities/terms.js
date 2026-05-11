"use strict";

import elements from "../elements";

import { termFromNominalValue } from "../utilities/term";
import { termsStringFromTermsArray } from "../utilities/string";

export function termsFromNominalValues(nominalValues) {
  const { Terms } = elements,
        termsArray = termsArrayFromNominalValues(nominalValues),
        termsString = termsStringFromTermsArray(termsArray),
        string = termsString, ///
        array = termsArray,  ///
        node = null,
        breakPoint = null,
        context = null,
        terms = new Terms(context, string, node, breakPoint, array);

  return terms;
}

function termsArrayFromNominalValues(nominalValues) {
  const termsArray = nominalValues.map((nominalValue) => {
    const term = termFromNominalValue(nominalValue);

    return term;
  });

  return termsArray;
}
