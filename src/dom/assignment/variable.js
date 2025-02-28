"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { domAssigned } from "../../dom";

export default domAssigned(class VariableAssignment {
  constructor(string, variable, value) {
    this.string = string;
    this.variable = variable;
    this.value = value;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getValue() {
    return this.value;
  }

  evaluate(context) {
    let value;

    const variableAssignmentString = this.string; ///

    context.trace(`Evaluating the '${variableAssignmentString}' variable assignment...`);

    value = this.value.evaluate(context);

    debugger

    if (value === null) {
      const variableAssignmentString = this.string, ///
            message = `The '${variableAssignmentString}' variable assignment cannot be evaluated.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...evaluated the '${variableAssignmentString}' variable assignment.`);

    return value;
  }

  static name = "VariableAssignment";

  static fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const variableAssignment = variableAssignmentFromTypeAndAssignmentNode(type, variableAssignmentNode, context);

    return variableAssignment;
  }
});

function variableAssignmentFromTypeAndAssignmentNode(type, variableAssignmentNode, context) {
  const { Variable, Value, VariableAssignment } = dom,
        node = variableAssignmentNode, ///
        string = context.nodeAsString(node),
        value = Value.fromVariableAssignmentNode(variableAssignmentNode, context),
        variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context),
        assignment = new VariableAssignment(string, variable, value);

  return assignment;
}
