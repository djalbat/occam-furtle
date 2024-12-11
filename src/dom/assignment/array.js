"use strict";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";
import { typesFromTypeTerminalNodes, variablesFromVariableNodesAndTypes } from "../assignment/object";

const variableNodesQuery = nodesQuery("/arrayAssignment/variable"),
      typeTerminalNodesQuery = nodesQuery("/arrayAssignment/@type"),
      dummyVariableNodesQuery = nodesQuery("/arrayAssignment/dummyVariable"),
      arrayAssignmentNodeQuery = nodeQuery("/step/arrayAssignment");

export default domAssigned(class ArrayAssigment {
  constructor(string, offset, variables) {
    this.string = string;
    this.offset = offset;
    this.variables = variables;
  }

  getString() {
    debugger
  }

  getOffset() {
    return this.offset;
  }

  getVariables() {
    return this.variables;
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode) {
    let arrayAssignment = null;

    const arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);

    if (arrayAssignmentNode !== null) {
      const typeTerminalNodes = typeTerminalNodesQuery(arrayAssignmentNode),
            variableNodes = variableNodesQuery(arrayAssignmentNode),
            types = typesFromTypeTerminalNodes(typeTerminalNodes),
            string = null,
            offset = offsetFromArrayAssignmentNode(arrayAssignmentNode),
            variables = variablesFromVariableNodesAndTypes(variableNodes, types);

      arrayAssignment = new ArrayAssigment(string, offset, variables);
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
