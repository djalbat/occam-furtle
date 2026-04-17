"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Reference extends Element {
  constructor(context, string, node, breakPoint, name) {
    super(context, string, node, breakPoint);

    this.name = name;
  }

  getName() {
    return this.name;
  }

  getProcedureName() {
    const procedureName = this.name;  ///

    return procedureName;
  }

  static name = "Reference";
});
