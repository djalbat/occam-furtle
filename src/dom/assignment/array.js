"use strict";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const arrayAssignmentNodeQuery = nodeQuery("/step/arrayAssignment");

export default domAssigned(class ArrayAssigment {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode, context) {
    let arrayAssignment = null;

    const arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);

    if (arrayAssignmentNode !== null) {
      debugger
    }

    return arrayAssignment;
  }
});
