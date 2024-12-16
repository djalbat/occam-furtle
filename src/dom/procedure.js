"use strict";

import dom from "../dom";
import Exception from "../exception";

import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodeQuery = nodeQuery("/procedureDeclaration/label"),
      nonsenseNodesQuery = nodesQuery("/procedureDeclaration/returnBlock/nonsense"),
      parametersNodeQuery = nodeQuery("/procedureDeclaration/parameters"),
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

  matchName(name) { return this.label.matchName(name); }

  call(values, fileContext) {
    let context;

    context = fileContext;  ///

    const procedureString = this.string;  ///

    context.trace(`Calling the '${procedureString}' procedure...`);

    if (this.nonsensical) {
      const message = `The '${procedureString}' procedure is nonsensical.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.parameters.matchValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context),
          value = this.returnBlock.resolve(variables, context),
          valueType = value.getType();

    if (this.type !== valueType) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type and the '${procedureString}' procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context = fileContext;  ///

    context.debug(`...called the '${procedureString}' procedure.`);

    return value;
  }

  static name = "Procedure";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const { Label, ReturnBlock, Parameters } = dom,
          string = stringFromProcedureDeclarationNode(procedureDeclarationNode, context),
          type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context),
          label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          parameters = Parameters.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          nonsensical = nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context),
          returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context),
          procedureDeclaration = new Procedure(string, type, label, parameters, nonsensical, returnBlock);

    return procedureDeclaration;
  }
});

export function variablesFromValuesAndParameters(values, parameters, context) {
  const variables = [];

  values.forEachValue((value, index) => {
    const { Variable } = dom,
          parameter = parameters.getParameter(index);

    if (parameter !== null) {
      const variable = Variable.fromValueAndParameter(value, parameter, context);

      variables.push(variable);
    }
  });

  return variables;
}

function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

function stringFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const labelNode = labelNodeQuery(procedureDeclarationNode),
        parametersNode = parametersNodeQuery(procedureDeclarationNode),
        typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode),
        typeNode = typeTerminalNode,  ///
        typeString = context.nodeAsString(typeNode),
        labelString = context.nodeAsString(labelNode),
        parametersString = context.nodeAsString(parametersNode),
        string = `${typeString} ${labelString}(${parametersString}) { ... }`;

  return string;
}

function nonsensicalFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const nonsenseNodes = nonsenseNodesQuery(procedureDeclarationNode),
        nonsenseNodesLength = nonsenseNodes.length,
        nonsensical = (nonsenseNodesLength > 0);

  return nonsensical;
}
