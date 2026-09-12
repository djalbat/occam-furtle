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

  someNamedBinding(callback, forward, back) {
    return some(this.array, callback, forward, back);
  }

  forEachNamedBinding(callback, forward, back) {
    return forEach(this.array, callback, forward, back);
  }

  compareNamedBinding(namedBinding, context, forward, back) {
    const namedBindingString = namedBinding.getString(),
          namedBindingsString = this.getString(); ///

    context.trace(`Comparing the '${namedBindingString}' named binding with the '${namedBindingsString}' named bindings...`);

    const namedBindingA = namedBinding; ///

    return this.someNamedBinding((namedBinding, forward, back) => {
      if (namedBinding === null) {
        return forward(back);
      }

      const namedBindingB = namedBinding; ///

      return namedBindingA.compareNamedBinding(namedBindingB, context, forward, back);
    }, (back) => {
      context.debug(`...compared the '${namedBindingString}' named binding with the '${namedBindingsString}' named bindings.`);

      return forward(back);
    }, back);
  }

  compareNamedBindings(namedBindings, context, forward, back) {
    return namedBindings.forEachNamedBinding((namedBinding, forward, back) => {
      if (namedBinding === null) {
        return forward(back);
      }

      return this.compareNamedBinding(namedBinding, context, forward, back);
    }, forward, back);
  }

  static name = "NamedBindings";
});
