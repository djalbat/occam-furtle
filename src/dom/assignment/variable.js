"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const variableAssignmentNodeQuery = nodeQuery("/step/variableAssignment");

export default domAssigned(class VariableAssignment {
  constructor(string, variable) {
    this.string = string;
    this.variable = variable;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  resolve(context) {
    const variableAssignmentString = this.string; ///

    context.trace(`Resolving the '${variableAssignmentString}' variable assignment...`);

    this.variable.assign(context);

    context.debug(`...resolved the '${variableAssignmentString}' variable assignment.`);
  }

  static name = "VariableAssignment";

  static fromStepNode(stepNode, context) {
    let variableAssignment = null;

    const variableAssignmentNode = variableAssignmentNodeQuery(stepNode);

    if (variableAssignmentNode !== null) {
      const { Variable } = dom,
            node = variableAssignmentNode, ///
            string = context.nodeAsString(node),
            variable = Variable.fromVariableAssignmentNode(variableAssignmentNode, context);

      variableAssignment = new VariableAssignment(string, variable);
    }

    return variableAssignment;
  }
});
