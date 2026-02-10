"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import { define } from "../../elements";

const { asyncForEach } = asynchronousUtilities;

export default define(class VariableAssignments extends Element {
  constructor(context, string, node, array) {
    super(context, string, node)

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  async evaluate(context) {
    await this.break(context);

    const variableAssignmentsString = this.getString(); ///

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    await asyncForEach(this.array, async (variableAssignment) => {
      await variableAssignment.evaluate(context);
    });

    context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);
  }

  static name = "VariableAssignments";
});
