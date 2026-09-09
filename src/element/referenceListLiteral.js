"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class ReferenceListLiteral extends Element {
  constructor(context, string, node, breakPoint, references) {
    super(context, string, node, breakPoint);

    this.references = references;
  }

  getReferences() {
    return this.references;
  }

  static name = "ReferenceListLiteral";
});
