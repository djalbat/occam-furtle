"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const arrayAssignmentNodeQuery = nodeQuery("/step/arrayAssignment");

export default domAssigned(class ArrayAssigment {
  constructor(string, parameters) {
    this.string = string;
    this.parameters = parameters;
  }

  getString() {
    return this.string;
  }

  getVariables() {
    return this.parameters;
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode, context) {
    let arrayAssignment = null;

    const arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);

    if (arrayAssignmentNode !== null) {
      const { Parameters } = dom,
            node = arrayAssignmentNode,  ///
            string = context.nodeAsString(node),
            parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context);

      arrayAssignment = new ArrayAssigment(string, parameters);
    }

    return arrayAssignment;
  }
});
