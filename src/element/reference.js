"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Reference extends Element {
  constructor(context, string, node, name) {
    super(context, string, node)

    this.name = name;
  }

  getName() {
    return this.name;
  }

  static name = "Reference";
});
