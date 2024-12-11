"use strict";

import dom from "../dom";

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

  setValue(value) {
    const { Assignment } = dom;

    this.assignment = Assignment.fromValue(value);
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

  static fromVariableNodeAndType(variableNode, type, context) {
    const node = variableNode,  ///
          string = context.nodeAsString(node),
          name = nameFromVariableNode(variableNode),
          assignment = null,
          variable = new Variable(string, type, name, assignment);

    return variable;
  }

  static fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode, context) {
    const { Assignment } = dom,
          node = variableNode,  ///
          string = context.nodeAsString(node),
          name = nameFromVariableNode(variableNode),
          assignment = Assignment.fromAssignmentNode(assignmentNode, context),
          variable = new Variable(string, type, name, assignment);

    return variable;
  }
});

function variableFromVariableNode(variableNode, context) {
  const { Variable } = dom,
        node = variableNode,  ///
        string = context.nodeAsString(node),
        type = null,
        name = nameFromVariableNode(variableNode),
        assignment = null,
        variable = new Variable(string, type, name, assignment);

  return variable;
}

function nameFromVariableNode(variableNode) {
  const variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode),
        variableNameTerminalNodeContent = variableNameTerminalNode.getContent(),
        name = variableNameTerminalNodeContent; ///

  return name;
}
