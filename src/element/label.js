"use strict";

import { define } from "../elements";

export default define(class Label {
  constructor(string, name) {
    this.string = string;
    this.name = name;
  }

  getString() {
    return this.string;
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
