"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Error {
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
  const {Error} = dom,
        node = errorNode, ///
        string = context.nodeAsString(node),
        error = new Error(string);

  return error;
}
