"use strict";

import { domAssigned } from "../dom";

export default domAssigned(class Error {
  constructor(fileContext, string) {
    this.fileContext = fileContext;
    this.string = string;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  static name = "Error";

  static fromErrorNode(errorNode, fileContext) {
    const node = errorNode, ///
          string = fileContext.nodeAsString(node),
          error = new Error(fileContext, string);

    return error;
  }
});
