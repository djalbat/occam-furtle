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

  call(expressions, fileContext) {
    let context;

    context = fileContext;  ///

    const procedureString = this.string;  ///

    context.trace(`Calling the '${procedureString}' procedure...`);

    this.parameters.matchExpressions(expressions, context);

    const variables = variablesFromExpressionsAndParameters(expressions, this.parameters, context),
          expression = this.returnBlock.evaluate(variables, context),
          expressionType = expression.getType();

    if (this.type !== expressionType) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type and the '${procedureString}' procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context = fileContext;  ///

    context.debug(`...called the '${procedureString}' procedure.`);

    return expression;
  }

  static name = "Procedure";

  static fromProcedureDeclarationNode(procedureDeclarationNode, context) {
    const procedureDeclaration = procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context);

    return procedureDeclaration;
  }
});

export function variablesFromExpressionsAndParameters(expressions, parameters, context) {
  const variables = [];

  expressions.forEachExpression((expression, index) => {
    const { Variable } = dom,
          parameter = parameters.getParameter(index);

    if (parameter !== null) {
      const variable = Variable.fromExpressionAndParameter(expression, parameter, context);

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
