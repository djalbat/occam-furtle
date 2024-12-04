"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const stepNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/step"),
      nonsenseNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/nonsense"),
      parameterNodesQuery = nodesQuery("/procedureDeclaration/parameter"),
      typeTerminalNodeQuery = nodeQuery("/procedureDeclaration/@type");

export default domAssigned(class Procedure {
  constructor(type, label, parameters, nonsensical, steps) {
    this.type = type;
    this.label = label;
    this.paramters = parameters;
    this.nonsensical = nonsensical;
    this.steps = steps;
  }

  getType() {
    return this.type;
  }

  getLabel() {
    return this.label;
  }

  getParameters() {
    return this.paramters;
  }

  isNonsensical() {
    return this.nonsensical;
  }

  getString() {
    const typeString = this.type, ///
          labelString = this.label.getString(),
          parametersString = parametersStringFromParameters(this.parameters),
          string = `${typeString} ${labelString}(${parametersString})`;

    return string;
  }

  static name = "Procedure";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Label } = dom,
          type = typeFromProcedureDeclarationNode(procedureDeclarationNode),
          label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context),
          nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context),
          steps = stepsFromProcedureDeclarationNode(procedureDeclarationNode, context),
          procedureDeclaration = new Procedure(type, label, parameters, nonsensical, steps);

    return procedureDeclaration;
  }
});

function parametersStringFromParameters(parameters) {
  const parametersString = parameters.reduce((parametersString, parameter) => {
    const parameterString = parameter.getString();

    parametersString = (parametersString === null) ?
                         parameterString : ///
                          `${parametersString} ,${parameterString}`;

    return parametersString;
  }, null);

  return parametersString;
}

function typeFromProcedureDeclarationNode(procedureDeclarationNode) {
  const typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

function stepsFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Step } = dom,
        stepNodes = stepNodesQuery(procedureDeclarationNode),
        steps = stepNodes.map((stepNode) => {
          const step = Step.fromStepNode(stepNode, context);

          return step;
        });

  return steps;
}

function parametersFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Parameter } = dom,
        parameterNodes = parameterNodesQuery(procedureDeclarationNode),
        parameters = parameterNodes.map((parameterNode) => {
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return parameters;
}

function nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const nonsenseNodes = nonsenseNodesQuery(procedureDeclarationNode),
        nonsenseNodesLength = nonsenseNodes.length,
        nonsensical = (nonsenseNodesLength > 0);

  return nonsensical;
}

