"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";

const typeTerminalNodeQuery = nodeQuery("/procedureDeclaration/@type");

export default domAssigned(class Procedure {
  constructor(string, type, label, parameters, returnBlock) {
    this.string = string;
    this.type = type;
    this.label = label;
    this.parameters = parameters;
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

    this.parameters.matchValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context),
          value = this.returnBlock.evaluate(variables, context),
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
    const procedureDeclaration = procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context);

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

function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Label, ReturnBlock, Parameters, Procedure } = dom,
        returnBlock = ReturnBlock.fromProcedureDeclarationNode(procedureDeclarationNode, context),
        parameters = Parameters.fromProcedureDeclarationNode(procedureDeclarationNode, context),
        label = Label.fromProcedureDeclarationNode(procedureDeclarationNode, context),
        type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context),
        string = stringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock),
        procedureDeclaration = new Procedure(string, type, label, parameters, returnBlock);

  return procedureDeclaration;
}

function stringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock) {
  const typeString = type,  ///
        labelString = label.getString(),
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        string = `${typeString} ${labelString}(${parametersString}) ${returnBlockString}`;

  return string;
}

function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(procedureDeclarationNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
