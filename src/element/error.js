"use strict";

import { define } from "../elements";

import Element from "../element";

export default define(class Error extends Element {
  constructor(conterxt, string, node) {
    super(context, string, node)
  }

  verify(context) {
    const verifies = false,
          errorString = this.getString();  ///

    context.warning(`The '${errorString}' error cannot be verified.`);

    return verifies;
  }

  static name = "Error";
});
