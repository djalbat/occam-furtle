"use strict";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const variablesAssignmentNodeQuery = nodeQuery("/step/variablesAssignment");

export default domAssigned(class VariablesAssignment {
  constructor(string) {
    this.string = string;
  }

  getString() {
    return this.string;
  }

  static name = "VariablesAssignment";

  static fromStepNode(stepNode, context) {
    let variablesAssignment = null;

    const variablesAssignmentNode = variablesAssignmentNodeQuery(stepNode);

    if (variablesAssignmentNode !== null) {
      const node = variablesAssignmentNode, ///
            string = context.nodeAsString(node);

      debugger
    }

    return variablesAssignment;
  }
});
