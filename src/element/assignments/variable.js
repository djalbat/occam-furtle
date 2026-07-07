"use strict";

import { Element, continuationUtilities } from "occam-languages";

import { define } from "../../elements";

const { forEach, breakable } = continuationUtilities;

export default define(class VariableAssignments extends Element {
  constructor(context, string, node, breakPoint, array) {
    super(context, string, node, breakPoint);

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  evaluate = breakable(function (context, continuation) {
    const variableAssignmentsString = this.getString(); ///

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    forEach(this.array, (variableAssignment, continuation) => {
      variableAssignment.evaluate(context, continuation);
    }, () => {
      context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);

      continuation();
    });
  });

  static name = "VariableAssignments";
});
