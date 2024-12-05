"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const nonsenseNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/nonsense"),
      parameterNodesQuery = nodesQuery("/procedureDeclaration/parameter"),
      typeTerminalNodeQuery = nodeQuery("/procedureDeclaration/@type");

export default domAssigned(class Procedure {
  constructor(type, label, parameters, nonsensical, returnBlock) {
    this.type = type;
    this.label = label;
    this.paramters = parameters;
    this.nonsensical = nonsensical;
    this.returnBlock = returnBlock;
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

  getReturnBlock() {
    return this.returnBlock;
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
    const { Label, ReturnBlock } = dom,
          type = typeFromProcedureDeclarationNode(procedureDeclarationNode),
          label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context),
          nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context),
          returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          procedureDeclaration = new Procedure(type, label, parameters, nonsensical, returnBlock);

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

