"use strict";

import { Element, continuationUtilities } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";

const { forEach } = continuationUtilities;

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

  someNamedBinding(callback) { return this.array.some(callback); }

  forEachNamedBinding(callback, back = null, forward = null) {
    if (forward !== null) {
      return forEach(this.array, callback, back, forward);
    }

    this.array.forEach(callback);
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
      if (namedBinding !== null) {
        forward();
      }

      const term = terms.getTerm(index);

      return namedBinding.compareTerm(term, context, back, forward);
    }, back, () => {
      context.debug(`...compared the '${termsString}' terms with the '${namedBindingsString}' named bindings.`);

      forward();
    });
  }

  compareNamedBinding(namedBinding, context) {
    const namedBindingString = namedBinding.getString(),
          namedBindingsString = this.getString(); ///

    context.trace(`Comparing the '${namedBindingString}' namedBinding with the '${namedBindingsString}' named bindings...`);

    const namedBindingA = namedBinding, ///
          namedBindingCompares = this.someNamedBinding((namedBinding) => {
            if (namedBinding !== null) {
              const namedBindingB = namedBinding, ///
                    namedBindingBComparesToNamedBindingA = namedBindingA.compareNamedBinding(namedBindingB, context);

              if (namedBindingBComparesToNamedBindingA) {
                return true;
              }
            }
          });

    if (!namedBindingCompares) {
      const message = `The '${namedBindingString}' namedBinding does not compare to any of the '${namedBindingsString}' named bindings.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...compared the '${namedBindingString}' namedBinding with the '${namedBindingsString}' named bindings.`);
  }

  compareNamedBindings(namedBindings, context) {
    namedBindings.forEachNamedBinding((namedBinding) => {
      if (namedBinding !== null) {
        this.compareNamedBinding(namedBinding, context);
      }
    });
  }

  static name = "NamedBindings";
});
