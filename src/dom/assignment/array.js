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
    return this.string;
  }

  getOffset() {
    return this.offset;
  }

  getVariables() {
    return this.variables;
  }

  static name = "ArrayAssignment";

  static fromStepNode(stepNode, context) {
    let arrayAssignment = null;

    const arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);

    if (arrayAssignmentNode !== null) {
      const typeTerminalNodes = typeTerminalNodesQuery(arrayAssignmentNode),
            variableNodes = variableNodesQuery(arrayAssignmentNode),
            types = typesFromTypeTerminalNodes(typeTerminalNodes, context),
            node = arrayAssignmentNode,  ///
            string = context.nodeAsString(node),
            offset = offsetFromArrayAssignmentNode(arrayAssignmentNode, context),
            variables = variablesFromVariableNodesAndTypes(variableNodes, types, context);

      arrayAssignment = new ArrayAssigment(string, offset, variables);
    }

    return arrayAssignment;
  }
});

function offsetFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const dummyVariableNodes = dummyVariableNodesQuery(arrayAssignmentNode),
        dummyVariableNodesLength = dummyVariableNodes.length,
        offset = dummyVariableNodesLength;  ///

  return offset;
}
