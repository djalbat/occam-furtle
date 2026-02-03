"use strict";

import { define } from "../../elements";

import Element from "../../element";

export default define(class VariableAssignments extends Element {
  constructor(context, string, node, array) {
    super(context, string, node)

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  evaluate(context) {
    const variableAssignmentsString = this.getString(); ///

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    this.array.forEach((variableAssignment) => {
      variableAssignment.evaluate(context);
    });

    context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);
  }

  static name = "VariableAssignments";
});
