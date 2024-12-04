"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const variableNodesQuery = nodesQuery("/variablesDeclaration/variable"),
      assignmentNodesQuery = nodesQuery("/variablesDeclaration/assignment"),
      typeTerminalNodeQuery = nodeQuery("/variablesDeclaration/@type"),
      variablesDeclarationNodeQuery = nodeQuery("/step/variablesDeclaration");

export default domAssigned(class VariablesDeclaration {
  constructor(variables) {
    this.variables = variables;
  }

  getVariables() {
    return this.variables;
  }

  getString() {
    const variablesString = variablesStringFromVariables(this.variables),
          string = variablesString; ///

    return string;
  }

  static name = "VariablesDeclaration";

  static fromStepNode(stepNode, context) {
    let variablesDeclaration = null;

    const variablesDeclarationNode = variablesDeclarationNodeQuery(stepNode);

    if (variablesDeclarationNode !== null) {
      const type = typeFromVariablesDeclarationNode(variablesDeclarationNode),
            variables = variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode);

      variablesDeclaration = new VariablesDeclaration(variables);
    }

    return variablesDeclaration;
  }
});

function variablesStringFromVariables(variables) {
  const variablesString = variables.reduce((variablesString, variable) => {
    const variableString = variable.getString();

    variablesString = (variablesString === null) ?
                        variableString :  ///
                          `${variablesString}, ${variableString}`;

    return variablesString;
  }, null);

  return variablesString;
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
                assignmentNode = assignmentNodeFromAssignmentNodesVariableNodeAndVariablesDeclarationNode(assignmentNodes, variableNode, variablesDeclarationNode),
                variable = Variable.fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode);

          return variable;
        });

  return variables;
}

function assignmentNodeFromAssignmentNodesVariableNodeAndVariablesDeclarationNode(assignmentNodes, variableNode, variablesDeclarationNode) {
  const nonTerminalNode = variablesDeclarationNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        variableNodeIndex = childNodes.indexOf(variableNode),
        assignmentNodeIndex = variableNodeIndex + 1,
        assignmentNode = assignmentNodes.find((assigmentNode) => {
          const index = childNodes.indexOf(assigmentNode);

          if (index === assignmentNodeIndex) {
            return true;
          }
        }) || null;

  return assignmentNode;
}
