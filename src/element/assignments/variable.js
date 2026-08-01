"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import { define } from "../../elements";

const { breakable } = breakPointUtilities,
      { asynchronousForEach } = continuationUtilities;

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

    return asynchronousForEach(this.array, (variableAssignment, continuation) => {
      return variableAssignment.evaluate(context, continuation);
    }, () => {
      context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);

      return continuation();
    });
  });

  static name = "VariableAssignments";
});
