"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import { define } from "../elements";

const { exists } = continuationUtilities,
      { unbreakable } = breakPointUtilities;

export default define(class Exists extends Element {
  constructor(context, string, node, breakPoint, values, variable, references) {
    super(context, string, node, breakPoint);

    this.string = string;
    this.values = values;
    this.variable = variable;
    this.references = references;
  }

  getValues() {
    return this.values;
  }

  getVariable() {
    return this.variable;
  }

  getReferences() {
    return this.references;
  }

  evaluate = unbreakable(function (context, forward, back) {
    const existsString = this.getString();

    context.trace(`Evaluating the '${existsString}' function...`);

    debugger

  });

  static name = "Exists";
});
