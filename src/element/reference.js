"use strict";

import { define } from "../elements";

export default define(class Reference {
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

  static name = "Reference";
});
