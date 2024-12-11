"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const variableNodesQuery = nodesQuery("/objectAssignment/variable"),
      typeTerminalNodesQuery = nodesQuery("/objectAssignment/@type"),
      objectAssignmentNodeQuery = nodeQuery("/step/objectAssignment");

export default domAssigned(class ObjectAssigment {
  constructor(string, variables) {
    this.string = string;
    this.variables = variables;
  }

  getString() {
    debugger
  }

  getVariables() {
    return this.variables;
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode) {
    let objectAssignment = null;

    const objectAssignmentNode = objectAssignmentNodeQuery(stepNode);

    if (objectAssignmentNode !== null) {
      const typeTerminalNodes = typeTerminalNodesQuery(objectAssignmentNode),
            variableNodes = variableNodesQuery(objectAssignmentNode),
            types = typesFromTypeTerminalNodes(typeTerminalNodes),
            string = null,
            variables = variablesFromVariableNodesAndTypes(variableNodes, types);

      objectAssignment = new ObjectAssigment(string, variables);
    }

    return objectAssignment;
  }
});

export function typesFromTypeTerminalNodes(typeTerminalNodes) {
  const types = typeTerminalNodes.map((typeTerminalNode) => {
          const typeTerminalNodeContent = typeTerminalNode.getContent(),
                type = typeTerminalNodeContent; ///

          return type;
        });

  return types;
}

export function variablesFromVariableNodesAndTypes(variableNodes, types) {
  const { Variable } = dom,
        variables = variableNodes.map((variableNode, index) => {
          const type = types[index],
                variable = Variable.fromVariableNodeAndType(variableNode, type);

          return variable;
        });

  return variables;
}
