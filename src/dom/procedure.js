"use strict";

import dom from "../dom";
import BlockContext from "../context/block";

import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";
import { nodeQuery, nodesQuery } from "../utilities/query";

const nonsenseNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/nonsense"),
      parameterNodesQuery = nodesQuery("/procedureDeclaration/parameter"),
      typeTerminalNodeQuery = nodeQuery("/procedureDeclaration/@type");

export default domAssigned(class Procedure {
  constructor(string, type, label, parameters, nonsensical, returnBlock) {
    this.string = string;
    this.type = type;
    this.label = label;
    this.parameters = parameters;
    this.nonsensical = nonsensical;
    this.returnBlock = returnBlock;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getLabel() {
    return this.label;
  }

  getParameters() {
    return this.parameters;
  }

  isNonsensical() {
    return this.nonsensical;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  isBoolean() {
    const typeBooleanType = (this.type === BOOLEAN_TYPE),
          boolean = typeBooleanType;  ///

    return boolean;
  }

  matchParameters(parameters) {
    const parametersA = parameters, ///
          parametersB = this.parameters,  ///
          parametersALength = parametersA.length,
          parametersBLength = parametersB.length,
          parametersMatch = (parametersALength === parametersBLength);

    return parametersMatch;
  }

  matchMetavariableName(metavariableName) { return this.label.matchMetavariableName(metavariableName); }

  call(values, context) {
    const procedureString = this.getString();

    context.trace(`Calling the '${procedureString}' procedure...`);

    const valuesMatchParameters =

    this.parameters.forEach((parameter, index) => {
      const node = nodes[index],
            value = node; ///

      parameter.setValue(value);
    });

    const blockContext = BlockContext.fromParameters(this.parameters, context);

    context = blockContext; ///

    const value = this.returnBlock.call(context);
  }

  static name = "Procedure";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Label, ReturnBlock } = dom,
          node = procedureDeclarationNode,  ///
          string = context.nodeAsString(node),
          type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context),
          label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context),
          nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context),
          returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          procedureDeclaration = new Procedure(string, type, label, parameters, nonsensical, returnBlock);

    return procedureDeclaration;
  }
});

function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
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
