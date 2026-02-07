"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { termsStringFromTermsArray } from "../utilities/string";

export default define(class Terms extends Element {
  constructor(context, string, node, array) {
    super(context, string, node)

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
    const termsArray = this.mapTerm((term) => {
            term = term.evaluate(context);

            return term;
          }),
          termsString = termsStringFromTermsArray(termsArray, context),
          string = termsString, ///
          array = termsArray, ///
          node = null;

    context = null;

    const terms = new Terms(context, string, node, array);

    return terms;
  }

  static name = "Terms";

  static fromTerm(term, context) {
    const termsArray = [
            term
          ],
          termsString = termsStringFromTermsArray(termsArray, context),
          string = termsString, ///
          array = termsArray, ///
          node = null;

    context = null;

    const terms = new Terms(context, string, node, array);

    return terms;
  }
});
