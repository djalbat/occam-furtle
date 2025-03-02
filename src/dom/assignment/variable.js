"use strict";

import dom from "../../dom";

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

    this.variable.assign(value, context);

    context.debug(`...evaluated the '${variableAssignmentString}' variable assignment.`);

    return value;
  }

  static name = "VariableAssignment";

  static fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);

    return variableAssignment;
  }
});

function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const { Variable, Value, VariableAssignment } = dom,
        value = Value.fromVariableAssignmentNode(variableAssignmentNode, context),
        variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context),
        string = stringFromValueAndVariable(value, variable, context),
        assignment = new VariableAssignment(string, variable, value);

  return assignment;
}

function stringFromValueAndVariable(value, variable, context) {
  const variableString = variable.getString(),
        valueString = value.getString(),
        string = `${variableString} = ${valueString};`;

  return string;
}
