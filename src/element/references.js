"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class References extends Element {
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

  getReference(index) {
    const reference = this.array[index] || null;

    return reference;
  }

  static name = "References";
});
