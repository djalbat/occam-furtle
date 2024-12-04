"use strict";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const variablesAssignmentNodeQuery = nodeQuery("/step/variablesAssignment");

export default domAssigned(class VariablesAssignment {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "VariablesAssignment";

  static fromStepNode(stepNode, context) {
    let variablesAssignment = null;

    const variablesAssignmentNode = variablesAssignmentNodeQuery(stepNode);

    if (variablesAssignmentNode !== null) {
      debugger
    }

    return variablesAssignment;
  }
});
