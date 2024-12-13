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
    return this.string;
  }

  getVariables() {
    return this.variables;
  }

  resolve(context) {
    const objectAssignmentString = this.string; ///

    context.trace(`Resolving the '${objectAssignmentString}' object assignment...`);




    context.debug(`...resolved the '${objectAssignmentString}' object assignment.`);
  }

  static name = "ObjectAssigment";

  static fromStepNode(stepNode, context) {
    let objectAssignment = null;

    const objectAssignmentNode = objectAssignmentNodeQuery(stepNode);

    if (objectAssignmentNode !== null) {
      const typeTerminalNodes = typeTerminalNodesQuery(objectAssignmentNode),
            variableNodes = variableNodesQuery(objectAssignmentNode),
            types = typesFromTypeTerminalNodes(typeTerminalNodes, context),
            node = objectAssignmentNode,  ///
            string = context.nodeAsString(node),
            variables = variablesFromVariableNodesAndTypes(variableNodes, types, context);

      objectAssignment = new ObjectAssigment(string, variables);
    }

    return objectAssignment;
  }
});

export function typesFromTypeTerminalNodes(typeTerminalNodes, context) {
  const types = typeTerminalNodes.map((typeTerminalNode) => {
          const typeTerminalNodeContent = typeTerminalNode.getContent(),
                type = typeTerminalNodeContent; ///

          return type;
        });

  return types;
}

export function variablesFromVariableNodesAndTypes(variableNodes, types, context) {
  const { Variable } = dom,
        variables = variableNodes.map((variableNode, index) => {
          const type = types[index],
                variable = Variable.fromVariableNodeAndType(variableNode, type, context);

          return variable;
        });

  return variables;
}
