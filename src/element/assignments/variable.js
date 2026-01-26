"use strict";

import { define } from "../../elements";

export default define(class VariableAssignments {
  constructor(string, array) {
    this.string = string;
    this.array = array;
  }

  getString() {
    return this.string;
  }

  getArray() {
    return this.array;
  }

  evaluate(context) {
    const variableAssignmentsString = this.string; ///

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    this.array.forEach((variableAssignment) => {
      variableAssignment.evaluate(context);
    });

    context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);
  }

  static name = "VariableAssignments";
});
