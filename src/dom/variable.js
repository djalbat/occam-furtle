"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const valueVariableNodeQuery = nodeQuery("/value/variable"),
      nodeQueryVariableNodeQuery = nodeQuery("/nodeQuery/variable"),
      nodesQueryVariableNodeQuery = nodeQuery("/nodesQuery/variable"),
      forEachLoopVariableNodeQuery = nodeQuery("/forEachLoop/variable"),
      variableNameTerminalNodeQuery = nodeQuery("/variable/@name"),
      arrayAssignmentVariableNodeQuery = nodeQuery("/arrayAssignment/variable"),
      objectAssignmentVariableNodeQuery = nodeQuery("/objectAssignment/variable");

export default domAssigned(class Variable {
  constructor(string, type, name, value, assignment) {
    this.string = string;
    this.type = type;
    this.name = name;
    this.value = value;
    this.assignment = assignment;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  getAssignment() {
    return this.assignment;
  }

  matchVariableName(variableName) {
    const nameMatches = (this.name === variableName);

    return nameMatches;
  }

  assign(context) {
    const variableString = this.string; ///

    if (this.assignment === null) {
      context.debug(`The '${variableString}' variable has not been assigned a value.`);

      return;
    }

    context.trace(`Assigning the '${variableString}' variable a value...`);

    const value = this.assignment.resolve(context),
          type = value.getType();

    if (this.type !== type) {
      const message = `The '${variableString} variable's '${this.type}' type does not match the assigned value's '${type}' type.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.value = value;

    context.debug(`...assigned the '${variableString}' variable a value.`);
  }

  resolve(context) {
    const variableString = this.string; ///

    context.trace(`Resolving the '${variableString}' variable...`);

    const variableName = this.name, ///
          variable = context.findVariableByVariableName(variableName);

    if (variable === null) {
      const message = `The '${variableString}; variable cannot be found.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const value = variable.getValue();

    context.debug(`...resolved the '${variableString}' variable.`);

    return value;
  }

  static name = "Variable";

  static fromValueNode(valueNode, context) {
    let variable = null;

    const valueVariableNode = valueVariableNodeQuery(valueNode);

    if (valueVariableNode !== null) {
      const variableNode = valueVariableNode; ///

      variable = variableFromVariableNode(variableNode, context);
    }

    return variable;
  }

  static fromNodeQueryNode(nodeQueryNode, context) {
    const nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode),
          variableNode = nodeQueryVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromNodesQueryNode(nodesQueryNode, context) {
    const nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode),
          variableNode = nodesQueryVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromForEachLoopNode(forEachLoopLoopNode, context) {
    const forEachLoopVariableNode = forEachLoopVariableNodeQuery(forEachLoopLoopNode),
          variableNode = forEachLoopVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromValueAndParameter(value, parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          string = name,  ///
          assignment = null,
          variable = new Variable(string, type, name, value, assignment);

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type, context) {
    const node = variableNode,  ///
          string = context.nodeAsString(node),
          name = nameFromVariableNode(variableNode),
          value = null,
          assignment = null,
          variable = new Variable(string, type, name, value, assignment);

    return variable;
  }

  static fromArrayAssignmentNode(arrayAssignmentNode, context) {
    const arrayAssignmentVariableNode = arrayAssignmentVariableNodeQuery(arrayAssignmentNode),
          variableNode = arrayAssignmentVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromObjectAssignmentNode(objectAssignmentNode, context) {
    const objectAssignmentVariableNode = objectAssignmentVariableNodeQuery(objectAssignmentNode),
          variableNode = objectAssignmentVariableNode, ///
          variable = variableFromVariableNode(variableNode, context);

    return variable;
  }

  static fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode, context) {
    const { Assignment } = dom,
          node = variableNode,  ///
          string = context.nodeAsString(node),
          name = nameFromVariableNode(variableNode),
          value = null,
          assignment = Assignment.fromAssignmentNode(assignmentNode, context),
          variable = new Variable(string, type, name, value, assignment);

    return variable;
  }
});

function variableFromVariableNode(variableNode, context) {
  const { Variable } = dom,
        node = variableNode,  ///
        string = context.nodeAsString(node),
        type = null,
        name = nameFromVariableNode(variableNode),
        value = null,
        assignment = null,
        variable = new Variable(string, type, name, value, assignment);

  return variable;
}

function nameFromVariableNode(variableNode) {
  const variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode),
        variableNameTerminalNodeContent = variableNameTerminalNode.getContent(),
        name = variableNameTerminalNodeContent; ///

  return name;
}
