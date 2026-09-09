"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import { define } from "../elements";

const { unbreakable } = breakPointUtilities;

export default define(class Error extends Element {
  constructor(context, string, node, breakPoint) {
    super(context, string, node, breakPoint);
  }

  verify = unbreakable(function (context, forward, back) {
    const errorString = this.getString();  ///

    context.warning(`The '${errorString}' error cannot be verified.`);

    return back();
  });

  static name = "Error";
});
