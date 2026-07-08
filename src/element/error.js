"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Error extends Element {
  constructor(context, string, node, breakPoint) {
    super(context, string, node, breakPoint);
  }

  verify(context, continuation) {
    let verifies;

    const errorString = this.getString();  ///

    verifies = false;

    context.warning(`The '${errorString}' error cannot be verified.`);

    continuation(verifies);
  }

  static name = "Error";
});
