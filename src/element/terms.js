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

  mapTerm(callback, forward, back) {
    return map(this.array, callback, forward, back);
  }

  evaluate(context, back, forward) {
    return this.mapTerm((term, forward, back) => {
      return term.evaluate(context, forward, back);
    }, (valuesArray) => {
      const valuesString = valuesStringFromValuesArray(valuesArray, context),
            string = valuesString, ///
            array = valuesArray, ///
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
