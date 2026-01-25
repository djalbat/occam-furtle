"use strict";

import elements from "../elements";

import { define } from "../elements";

export default define(class Error {
  constructor(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }

  static name = "Error";

  static fromErrorNode(errorNode, context) {
    const error = errorFromErrorNode(errorNode, context);

    return error;
  }
});

function errorFromErrorNode(errorNode, context) {
  const {Error} = elements,
        node = errorNode, ///
        string = context.nodeAsString(node),
        error = new Error(string);

  return error;
}
