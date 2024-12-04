"use strict";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const objectAssignmentNodeQuery = nodeQuery("/step/objectAssignment");

export default domAssigned(class ObjectAssigment {
  constructor() {
  }

  getString() {
    debugger
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode, context) {
    let objectAssignment = null;

    const objectAssignmentNode = objectAssignmentNodeQuery(stepNode);

    if (objectAssignmentNode !== null) {
      debugger
    }

    return objectAssignment;
  }
});
