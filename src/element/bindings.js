"use strict";

import { Element, continuationUtilities } from "occam-languages";

import { define } from "../elements";

const { forEach } = continuationUtilities;

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

  forEachBinding(callback, forward, back) {
    return forEach(this.array, callback, forward, back);
  }

  static name = "Bindings";
});
