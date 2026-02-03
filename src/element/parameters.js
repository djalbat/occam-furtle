"use strict";

import Element from "../element";
import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameters extends Element {
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

  getParameter(index) {
    const parameter = this.array[index] || null;

    return parameter;
  }

  forEachParameter(callback) { this.array.forEach(callback); }

  matchTerms(terms, context) {
    const termsString = terms.getString(),
          parametersString = this.getString(); ///

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
