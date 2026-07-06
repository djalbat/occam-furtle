"use strict";

import { Element, continuationUtilities } from "occam-languages";

import { define } from "../elements";

const { unbreakable } = continuationUtilities;

export default define(class Error extends Element {
  constructor(context, string, node, breakPoint) {
    super(context, string, node, breakPoint);
  }

  verify = unbreakable(function (context) {
    let verifies;

    const errorString = this.getString();  ///

    verifies = false;

    context.warning(`The '${errorString}' error cannot be verified.`);

    return verifies;
  });

  static name = "Error";
});
