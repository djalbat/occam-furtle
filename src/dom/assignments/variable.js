"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const typeTerminalNodeQuery = nodeQuery("/variableAssignments/@type"),
      variableAssignmentsNodeQuery = nodeQuery("/step/variableAssignments"),
      variableAssignmentNodesQuery = nodesQuery("/variableAssignments/variableAssignment");

export default domAssigned(class VariableAssignments {
  constructor(string, array) {
    this.string = string;
    this.array = array;
  }

  getString() {
    return this.string;
  }

  getArray() {
    return this.array;
  }

  evaluate(context) {
    const variableAssignmentsString = this.string; ///

    context.trace(`Evaluating the '${variableAssignmentsString}' variable assignments...`);

    this.array.forEach((variableAssignment) => {
      variableAssignment.evaluate(context);
    });

    context.debug(`...evaluated the '${variableAssignmentsString}' variable assignments.`);
  }

  static name = "VariableAssignments";

  static fromStepNode(stepNode, context) {
    let variableAssignments = null;

    const variableAssignmentsNode = variableAssignmentsNodeQuery(stepNode);

    if (variableAssignmentsNode !== null) {
      const node = variableAssignmentsNode,  ////
            string = context.nodeAsString(node),
            type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context),
            array = arrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context);

      variableAssignments = new VariableAssignments(string, array);
    }

    return variableAssignments;
  }
});

function typeFromVariableAssignmentsNode(variableAssignmentsNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(variableAssignmentsNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

function arrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context) {
  const variableAssignmentNodes = variableAssignmentNodesQuery(variableAssignmentsNode),
        array = variableAssignmentNodes.map((variableAssignmentNode) => {
          const { VariableAssignment } = dom,
                variableAssignment = VariableAssignment.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);

          return variableAssignment;
        });

  return array;
}
