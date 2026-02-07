"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";

import { asyncForEach } from "../../utilities/asynchronous";

export default define(class VariableAssignments extends Element {
  constructor(context, string, node, array) {
    super(context, string, node)

    this.array = array;
  }

  getArray() {
    return this.array;
  }

  async evaluate(context) {
    const variableAssignmentsString = this.getString(); ///

    await this.break(context);

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    await asyncForEach(this.array, async (variableAssignment) => {
      await variableAssignment.evaluate(context);
    });

    context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);
  }

  static name = "VariableAssignments";
});
