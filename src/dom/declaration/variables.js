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
    const variablesDeclarationString = this.string; ///

    context.trace(`Calling the '${variablesDeclarationString}' variables declaration...`);

    this.variables.forEach((variable) => {
      variable.assign(context);

      context.addVariable(variable);
    });

    context.debug(`...called the '${variablesDeclarationString}' variables declaration.`);
  }

  static name = "VariablesDeclaration";

  static fromStepNode(stepNode, context) {
    let variablesDeclaration = null;

    const variablesDeclarationNode = variablesDeclarationNodeQuery(stepNode);

    if (variablesDeclarationNode !== null) {
      const node = variablesDeclarationNode,  ////
            string = context.nodeAsString(node),
            type = typeFromVariablesDeclarationNode(variablesDeclarationNode, context),
            variables = variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode, context);

      variablesDeclaration = new VariablesDeclaration(string, variables);
    }

    return variablesDeclaration;
  }
});

function typeFromVariablesDeclarationNode(variablesDeclarationNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(variablesDeclarationNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

function variablesFromTypeAndVariablesDeclarationNode(type, variablesDeclarationNode, context) {
  const variableNodes = variableNodesQuery(variablesDeclarationNode),
        assignmentNodes = assignmentNodesQuery(variablesDeclarationNode),
        variables = variableNodes.map((variableNode) => {
          const { Variable } = dom,
                assignmentNode = findSiblingNode(assignmentNodes, variableNode, variablesDeclarationNode),
                variable = Variable.fromTypeVariableNodeAndAssignmentNode(type, variableNode, assignmentNode, context);

          return variable;
        });

  return variables;
}
