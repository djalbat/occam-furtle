"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import { define } from "../../elements";

const { forEach } = continuationUtilities,
      { breakable } = breakPointUtilities;

export default define(class VariableAssignments extends Element {
  constructor(context, string, node, breakPoint, array) {
    super(context, string, node, breakPoint);

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  evaluate = breakable(function (context, back, forward) {
    const variableAssignmentsString = this.getString(); ///

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    return forEach(this.array, (variableAssignment, back, forward) => {
      return variableAssignment.evaluate(context, back, forward);
    }, back, () => {
      context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);

      return forward();
    });
  });

  static name = "VariableAssignments";
});
