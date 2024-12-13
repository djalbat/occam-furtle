"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const arrayAssignmentNodeQuery = nodeQuery("/step/arrayAssignment");

export default domAssigned(class ArrayAssigment {
  constructor(string, variable, parameters) {
    this.string = string;
    this.variable = variable;
    this.parameters = parameters;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getVariables() {
    return this.parameters;
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode, context) {
    let arrayAssignment = null;

    const arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);

    if (arrayAssignmentNode !== null) {
      const { Variable, Parameters } = dom,
            node = arrayAssignmentNode,  ///
            string = context.nodeAsString(node),
            variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context),
            parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context);

      arrayAssignment = new ArrayAssigment(string, variable, parameters);
    }

    return arrayAssignment;
  }
});
