"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Bindings extends Element {
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

  getBinding(index) {
    const binding = this.array[index] || null;

    return binding;
  }

  forEachBinding(callback, back = null, forward = null) {
    if (forward !== null) {
      return forEach(this.array, callback, back, forward);
    }

    this.array.forEach(callback);
  }

  compareTerms(terms, context, back, forward) {
    const termsString = terms.getString(),
          bindingsString = this.getString(); ///

    context.trace(`Comparing the '${termsString}' terms against the '${bindingsString}' bindings...`);

    const termsLength = terms.getLength(),
          bindingsLength = this.getLength();

    if (termsLength !== bindingsLength) {
      const message = `The '${termsString}' expressions and '${bindingsString}' bindings are not of the same length.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    return this.forEachBinding((binding, back, forward, index) => {
      if (binding === null) {
        return forward();
      }

      const term = terms.getTerm(index);

      return binding.compareTerm(term, context, back, forward);
    }, back, () => {
      context.debug(`...compared the '${termsString}' terms against the '${bindingsString}' bindings.`);

      forward();
    });
  }

  static name = "Bindings";
});
