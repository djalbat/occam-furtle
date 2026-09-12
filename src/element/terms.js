"use strict";

import { Element, continuationUtilities } from "occam-languages";

import elements from "../elements";

import { define } from "../elements";
import { termsStringFromTermsArray, valuesStringFromValuesArray } from "../utilities/string";

const { map } = continuationUtilities;

export default define(class Terms extends Element {
  constructor(context, string, node, breakPoint, array) {
    super(context, string, node, breakPoint);

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  getLength() {
    const length = this.array.length;

    return length;
  }

  getTerm(index) {
    const term = this.array[index] || null;  ///

    return term;
  }

  addTerm(term) {
    this.array.push(term);
  }

  mapTerm(callback, context, forward, back) {
    return map(this.array, callback, context, forward, back);
  }

  evaluate(context, back, forward) {
    return this.mapTerm((term, context, forward, back) => {
      return term.evaluate(context, forward, back);
    }, (array) => {
      const valuesArray = array,  ///
            valuesString = valuesStringFromValuesArray(valuesArray),
            string = valuesString, ///
            node = null,
            breakPoint = null;

      context = null;

      const { Values } = elements,
            values = new Values(context, string, node, breakPoint, array);

      return forward(values, back);
    }, back);
  }

  static name = "Terms";

  static fromTerm(term, context) {
    const termsArray = [
            term
          ],
          termsString = termsStringFromTermsArray(termsArray, context),
          string = termsString, ///
          array = termsArray, ///
          node = null,
          breakPoint = null;

    context = null;

    const terms = new Terms(context, string, node, breakPoint, array);

    return terms;
  }
});
