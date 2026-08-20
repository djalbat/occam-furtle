"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Error extends Element {
  constructor(context, string, node, breakPoint) {
    super(context, string, node, breakPoint);
  }

  verify(context, back, forward) {
    const errorString = this.getString();  ///

    context.warning(`The '${errorString}' error cannot be verified.`);

    return back(context);
  }

  static name = "Error";
});
