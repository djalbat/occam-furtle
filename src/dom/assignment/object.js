"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const variableNodesQuery = nodesQuery("/objectAssignment/variable"),
      typeTerminalNodesQuery = nodesQuery("/objectAssignment/@type"),
      objectAssignmentNodeQuery = nodeQuery("/step/objectAssignment");

export default domAssigned(class ObjectAssigment {
  constructor(variables) {
    this.variables = variables;
  }

  getVariables() {
    return this.variables;
  }

  getString() {
    debugger
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode, context) {
    let objectAssignment = null;

    const objectAssignmentNode = objectAssignmentNodeQuery(stepNode);

    if (objectAssignmentNode !== null) {
      const typeTerminalNodes = typeTerminalNodesQuery(objectAssignmentNode),
            variableNodes = variableNodesQuery(objectAssignmentNode),
            types = typesFromTypeTerminalNodes(typeTerminalNodes),
            variables = variablesFromVariableNodesAndTypes(variableNodes, types);

      objectAssignment = new ObjectAssigment(variables);
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
