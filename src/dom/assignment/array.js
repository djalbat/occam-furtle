"use strict";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";
import { typesFromTypeTerminalNodes, variablesFromVariableNodesAndTypes } from "../assignment/object";

const variableNodesQuery = nodesQuery("/arrayAssignment/variable"),
      typeTerminalNodesQuery = nodesQuery("/arrayAssignment/@type"),
      dummyVariableNodesQuery = nodesQuery("/arrayAssignment/dummyVariable"),
      arrayAssignmentNodeQuery = nodeQuery("/step/arrayAssignment");

export default domAssigned(class ArrayAssigment {
  constructor(offset, variables) {
    this.offset = offset;
    this.variables = variables;
  }

  getOffset() {
    return this.offset;
  }

  getVariables() {
    return this.variables;
  }

  getString() {
    debugger
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode, context) {
    let arrayAssignment = null;

    const arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);

    if (arrayAssignmentNode !== null) {
      const typeTerminalNodes = typeTerminalNodesQuery(arrayAssignmentNode),
            variableNodes = variableNodesQuery(arrayAssignmentNode),
            types = typesFromTypeTerminalNodes(typeTerminalNodes),
            offset = offsetFromArrayAssignmentNode(arrayAssignmentNode),
            variables = variablesFromVariableNodesAndTypes(variableNodes, types);

      arrayAssignment = new ArrayAssigment(offset, variables);
    }

    return arrayAssignment;
  }
});

function offsetFromArrayAssignmentNode(arrayAssignmentNode) {
  const dummyVariableNodes = dummyVariableNodesQuery(arrayAssignmentNode),
        dummyVariableNodesLength = dummyVariableNodes.length,
        offset = dummyVariableNodesLength;  ///

  return offset;
}
