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

  compareProcedureName(procedureName) {
    const procedureNameCompares = (this.name === procedureName);

    return procedureNameCompares;
  }

  static name = "Label";
});
