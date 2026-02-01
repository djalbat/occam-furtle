"use strict";

import { define } from "../elements";
import { termsStringFromTermsArray } from "../utilities/string";

export default define(class Terms {
  constructor(string, array) {
    this.string = string;
    this.array = array;
  }

  getString() {
    return this.string;
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
          terms = new Terms(string, array);

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
          terms = new Terms(string, array);

    return terms;
  }
});
