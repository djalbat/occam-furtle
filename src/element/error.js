"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Error extends Element {
  constructor(context, string, node, lineIndex) {
    super(context, string, node, lineIndex)
  }

  verify(context) {
    const verifies = false,
          errorString = this.getString();  ///

    context.warning(`The '${errorString}' error cannot be verified.`);

    return verifies;
  }

  static name = "Error";
});
