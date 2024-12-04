"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const parameterNodesQuery = nodesQuery("/procedureDeclaration/parameter"),
      typeTerminalNodeQuery = nodeQuery("/procedureDeclaration/@type");

export default domAssigned(class Procedure {
  constructor(type, label, parameters) {
    this.type = type;
    this.label = label;
    this.paramters = parameters;
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
          procedureDeclaration = new Procedure(type, label, parameters);

    return procedureDeclaration;
  }
});

function parametersFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Parameter } = dom,
        parameterNodes = parameterNodesQuery(procedureDeclarationNode),
        parameters = parameterNodes.map((parameterNode) => {
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return parameters;
}

function typeFromProcedureDeclarationNode(procedureDeclarationNode) {
  const typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

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
