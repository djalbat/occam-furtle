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

  static fromErrorNode(errorNode, fileContext) {
    const node = errorNode, ///
          string = fileContext.nodeAsString(node),
          error = new Error(string);

    return error;
  }
});
