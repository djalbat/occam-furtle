"use strict";

import { define } from "../elements";

export default define(class Error {
  constructor(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }

  verify(context) {
    const verifies = false,
          errorString = this.getString();  ///

    context.warning(`The '${errorString}' error cannot be verified.`);

    return verifies;
  }

  static name = "Error";
});
