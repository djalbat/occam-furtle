"use strict";

import dom from "../dom";

import { NODE_TYPE } from "../types";
import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const typeTerminalNodeQuery = nodeQuery("/parameter/@type"),
      valueVariableNodeQuery = nodeQuery("/value/variable"),
      parameterVariableNodeQuery = nodeQuery("/parameter/variable"),
      nodeQueryVariableNodeQuery = nodeQuery("/nodeQuery/variable"),
      nodesQueryVariableNodeQuery = nodeQuery("/nodesQuery/variable"),
      forEachLoopVariableNodeQuery = nodeQuery("/forEachLoop/variable"),
      variableNameTerminalNodeQuery = nodeQuery("/variable/@name");

export default domAssigned(class Variable {
  constructor(type, name, assignment) {
    this.type = type;
    this.name = name;
    this.assignment = assignment;
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

  getString() {
    const string = `${this.type} ${this.name}`;

    return string;
  }

  isTypeNodeType() {
    const typeNodeType = (this.type === NODE_TYPE);

    return typeNodeType;
  }

  static name = "Variable";

  static fromValueNode(valueNode, context) {
    let variable = null;

    const valueVariableNode = valueVariableNodeQuery(valueNode);

    if (valueVariableNode !== null) {
      const variableNode = valueVariableNode, ///
            type = null,
            name = nameFromVariableNode(variableNode),
            assigment = null;

      variable = new Variable(type, name, assigment);
    }

    return variable;
  }

  static fromParameterNode(parameterNode, context) {
    const parameterVariableNode = parameterVariableNodeQuery(parameterNode),
          variableNode = parameterVariableNode, ///
          type = typeFromParameterNode(parameterNode),
          name = nameFromVariableNode(variableNode),
          assigment = null,
          variable = new Variable(type, name, assigment);

    return variable;
  }

  static fromNodeQueryNode(nodeQueryNode, context) {
    const nodeQueryVariableNode = nodeQueryVariableNodeQuery(nodeQueryNode),
          variableNode = nodeQueryVariableNode, ///
          type = null,
          name = nameFromVariableNode(variableNode),
          assigment = null,
          variable = new Variable(type, name, assigment);

    return variable;
  }

  static fromNodesQueryNode(nodesQueryNode, context) {
    const nodesQueryVariableNode = nodesQueryVariableNodeQuery(nodesQueryNode),
          variableNode = nodesQueryVariableNode, ///
          type = null,
          name = nameFromVariableNode(variableNode),
          assigment = null,
          variable = new Variable(type, name, assigment);

    return variable;
  }

  static fromForEachLoopNode(forEachLoopLoopNode, context) {
    const forEachLoopVariableNode = forEachLoopVariableNodeQuery(forEachLoopLoopNode),
          variableNode = forEachLoopVariableNode, ///
          type = null,
          name = nameFromVariableNode(variableNode),
          assigment = null,
          variable = new Variable(type, name, assigment);

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type) {
    const name = nameFromVariableNode(variableNode),
          assigment = null,
          variable = new Variable(type, name, assigment);

    return variable;
  }

  static fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode) {
    const { Assignment } = dom,
          name = nameFromVariableNode(variableNode),
          assignment = Assignment.fromAssignmentNode(assignmentNode),
          variable = new Variable(type, name, assignment);

    return variable;
  }
});

function nameFromVariableNode(variableNode) {
  const variableNameTerminalNode = variableNameTerminalNodeQuery(variableNode),
        variableNameTerminalNodeContent = variableNameTerminalNode.getContent(),
        name = variableNameTerminalNodeContent; ///

  return name;
}

function typeFromParameterNode(parameterNode) {
  const typeTerminalNode = typeTerminalNodeQuery(parameterNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
