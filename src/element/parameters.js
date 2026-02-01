"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameters {
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

  getParameter(index) {
    const parameter = this.array[index] || null;

    return parameter;
  }

  forEachParameter(callback) { this.array.forEach(callback); }

  matchTerms(terms, context) {
    const termsString = terms.getString(),
          parametersString = this.string; ///

    context.trace(`Matching the '${termsString}' terms against the '${parametersString}' parameters...`);

    const termsLength = terms.getLength(),
          parametersLength = this.getLength();

    if (termsLength !== parametersLength) {
      const message = `The '${termsString}' expressions and '${parametersString}' parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachParameter((parameter, index) => {
      if (parameter !== null) {
        const term = terms.getTerm(index);

        parameter.matchTerm(term, context);
      }
    });

    context.debug(`...matched the '${termsString}' terms against the '${parametersString}' parameters.`);
  }

  static name = "Parameters";
});
