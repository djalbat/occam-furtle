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

  evaluate = breakable(function (context, forward, back) {
    const variableAssignmentsString = this.getString(); ///

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    return forEach(this.array, (variableAssignment, forward, back) => {
      return variableAssignment.evaluate(context, forward, back);
    }, (back) => {
      context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);

      return forward(back);
    }, back);
  });

  static name = "VariableAssignments";
});
