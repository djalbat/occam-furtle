"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";
import {findSiblingNode} from "../../utilities/node";

const variableNodesQuery = nodesQuery("/variablesDeclaration/variable"),
      assignmentNodesQuery = nodesQuery("/variablesDeclaration/assignment"),
      typeTerminalNodeQuery = nodeQuery("/variablesDeclaration/@type"),
      variablesDeclarationNodeQuery = nodeQuery("/step/variablesDeclaration");

export default domAssigned(class VariablesDeclaration {
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

  call(context) {
    const variablesDeclarationString = this.getString();

    context.trace(`Calling the '${variablesDeclarationString}' variables declaration`);

    debugger
  }

  static name = "VariablesDeclaration";

  static fromStepNode(stepNode) {
    let variablesDeclaration = null;

    const variablesDeclarationNode = variablesDeclarationNodeQuery(stepNode);

    if (variablesDeclarationNode !== null) {
      const type = typeFromVariablesDeclarationNode(variablesDeclarationNode),
            variables = variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode),
            string = stringFromVariables(variables);

      variablesDeclaration = new VariablesDeclaration(string, variables);
    }

    return variablesDeclaration;
  }
});

function stringFromVariables(variables) {
  const variablesString = variables.reduce((variablesString, variable) => {
          const variableString = variable.getString();

          variablesString = (variablesString === null) ?
                              variableString :  ///
                                `${variablesString}, ${variableString}`;

          return variablesString;
        }, null),
        string = `${variablesString};`;

  return string;

}

function typeFromVariablesDeclarationNode(variablesDeclarationNode) {
  const typeTerminalNode = typeTerminalNodeQuery(variablesDeclarationNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

function variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode) {
  const variableNodes = variableNodesQuery(variablesDeclarationNode),
        assignmentNodes = assignmentNodesQuery(variablesDeclarationNode),
        variables = variableNodes.map((variableNode) => {
          const { Variable } = dom,
                assignmentNode = findSiblingNode(assignmentNodes, variableNode, variablesDeclarationNode),
                variable = Variable.fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode);

          return variable;
        });

  return variables;
}
