"use strict";

import { Element } from "occam-languages";

import elements from "../elements";

import { define } from "../elements";
import { termsStringFromTermsArray, valuesStringFromValuesArray } from "../utilities/string";

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

  mapTerm(callback) { return this.array.map(callback); }

  forEachTerm(callback) { this.array.forEach(callback); }

  evaluate(context) {
    const valuesArray = this.mapTerm((term) => {
            const value = term.evaluate(context);

            return value;
          }),
          valuesString = valuesStringFromValuesArray(valuesArray, context),
          string = valuesString, ///
          array = valuesArray, ///
          node = null,
          breakPoint = null;

    context = null;

    const { Values } = elements,
          values = new Values(context, string, node, breakPoint, array);

    return values;
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
