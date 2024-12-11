"use strict";

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
    const node = errorNode, ///
          string = context.nodeAsString(node),
          error = new Error(string);

    return error;
  }
});
