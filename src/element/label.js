"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Label extends Element {
  constructor(context, string, node, name) {
    super(context, string, node)

    this.name = name;
  }

  getName() {
    return this.name;
  }

  matchName(name) {
    const nameMatches = (name === this.name);

    return nameMatches;
  }

  static name = "Label";
});
