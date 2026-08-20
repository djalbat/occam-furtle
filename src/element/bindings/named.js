"use strict";

import { Element, continuationUtilities } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";

const { some, forEach } = continuationUtilities;

export default define(class NamedBindings extends Element {
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

  getNamedBinding(index) {
    const namedBinding = this.array[index] || null;

    return namedBinding;
  }

  someNamedBinding(callback, back, forward) {
    return some(this.array, callback, back, forward);
  }

  forEachNamedBinding(callback, back, forward) {
    return forEach(this.array, callback, back, forward);
  }

  compareTerms(terms, context, back, forward) {
    const termsString = terms.getString(),
          namedBindingsString = this.getString(); ///

    context.trace(`Comparing the '${termsString}' terms with the '${namedBindingsString}' named bindings...`);

    const termsLength = terms.getLength(),
          namedBindingsLength = this.getLength();

    if (termsLength !== namedBindingsLength) {
      const message = `The '${termsString}' terms and '${namedBindingsString}' named bindings are not of the same length.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    return this.forEachNamedBinding((namedBinding, back, forward, index) => {
      if (namedBinding === null) {
        return forward();
      }

      const term = terms.getTerm(index);

      return namedBinding.compareTerm(term, context, back, forward);
    }, back, () => {
      context.debug(`...compared the '${termsString}' terms with the '${namedBindingsString}' named bindings.`);

      return forward();
    });
  }

  compareNamedBinding(namedBinding, context, back, forward) {
    const namedBindingString = namedBinding.getString(),
          namedBindingsString = this.getString(); ///

    context.trace(`Comparing the '${namedBindingString}' namedBinding with the '${namedBindingsString}' named bindings...`);

    const namedBindingA = namedBinding; ///

    return this.someNamedBinding((namedBinding) => {
      if (namedBinding !== null) {
        const namedBindingB = namedBinding; ///

        return namedBindingA.compareNamedBinding(namedBindingB, context, back, forward);
      }
    }, back, (namedBindingCompares) => {
      if (!namedBindingCompares) {
        const message = `The '${namedBindingString}' namedBinding does not compare to any of the '${namedBindingsString}' named bindings.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      context.debug(`...compared the '${namedBindingString}' namedBinding with the '${namedBindingsString}' named bindings.`);

      return forward();
    });
  }

  compareNamedBindings(namedBindings, context, back, forward) {
    return namedBindings.forEachNamedBinding((namedBinding, back, forward) => {
      if (namedBinding === null) {
        return forward();
      }

      return this.compareNamedBinding(namedBinding, context, back, forward);
    }, back, forward);
  }

  static name = "NamedBindings";
});
