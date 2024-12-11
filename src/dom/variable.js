"use strict";

import dom from "../dom";

import { NODE_TYPE } from "../types";
import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const valueVariableNodeQuery = nodeQuery("/value/variable"),
      nodeQueryVariableNodeQuery = nodeQuery("/nodeQuery/variable"),
      nodesQueryVariableNodeQuery = nodeQuery("/nodesQuery/variable"),
      forEachLoopVariableNodeQuery = nodeQuery("/forEachLoop/variable"),
      variableNameTerminalNodeQuery = nodeQuery("/variable/@name");

export default domAssigned(class Variable {
  constructor(string, type, name, assignment) {
    this.string = string;
    this.type = type;
    this.name = name;
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

  getAssignment() {
    return this.assignment;
  }

  matchType(type) {
    const typeMatches = (this.type === type);

    return typeMatches;
  }

  setValue(value) {
    const { Assignment } = dom;

    this.assignment = Assignment.fromValue(value);
  }

  static name = "Variable";

  static fromValueNode(valueNode) {
    let variable = null;

    const valueVariableNode = valueVariableNodeQuery(valueNode);

    if (valueVariableNode !== null) {
      const variableNode = valueVariableNode, ///
            type = null,
            name = nameFromVariableNode(variableNode),
            assignment = null,
            string = stringFromTypeNameAndAssigment(type, name, assignment);

      variable = new Variable(string, type, name, assignment);
    }

    return variable;
  }

  static fromNodeQueryNode(nodeQueryNode) {
    const nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode),
          variableNode = nodeQueryVariableNode, ///
          type = null,
          name = nameFromVariableNode(variableNode),
          assignment = null,
          string = stringFromTypeNameAndAssigment(type, name, assignment),
          variable = new Variable(string, type, name, assignment);

    return variable;
  }

  static fromNodesQueryNode(nodesQueryNode) {
    const nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode),
          variableNode = nodesQueryVariableNode, ///
          type = null,
          name = nameFromVariableNode(variableNode),
          assignment = null,
          string = stringFromTypeNameAndAssigment(type, name, assignment),
          variable = new Variable(string, type, name, assignment);

    return variable;
  }

  static fromForEachLoopNode(forEachLoopLoopNode) {
    const forEachLoopVariableNode = forEachLoopVariableNodeQuery(forEachLoopLoopNode),
          variableNode = forEachLoopVariableNode, ///
          type = null,
          name = nameFromVariableNode(variableNode),
          assignment = null,
          string = stringFromTypeNameAndAssigment(type, name, assignment),
          variable = new Variable(string, type, name, assignment);

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type) {
    const name = nameFromVariableNode(variableNode),
          assignment = null,
          string = stringFromTypeNameAndAssigment(type, name, assignment),
          variable = new Variable(string, type, name, assignment);

    return variable;
  }

  static fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode) {
    const { Assignment } = dom,
          name = nameFromVariableNode(variableNode),
          assignment = Assignment.fromAssignmentNode(assignmentNode),
          string = stringFromTypeNameAndAssigment(type, name, assignment),
          variable = new Variable(string, type, name, assignment);

    return variable;
  }
});

function nameFromVariableNode(variableNode) {
  const variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode),
        variableNameTerminalNodeContent = variableNameTerminalNode.getContent(),
        name = variableNameTerminalNodeContent; ///

  return name;
}

function stringFromTypeNameAndAssigment(type, name, assignment) {
  let string;

  string = `${type} ${name}`;

  if (assignment !== null) {
    const assignmentString = assignment.getString();

    string = `${string}${assignmentString}`;
  }

  return string;
}

