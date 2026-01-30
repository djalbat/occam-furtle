"use strict";

import { EMPTY_STRING, UNDERSCORE, DISJUNCTION_OPERATOR, CONJUNCTION_OPERATOR } from "../constants";

export function stepStringFromNothing(context) {
  const stepString = EMPTY_STRING;

  return stepString;
}

export function variableStringFromName(name, context) {
  const nameString = name,  ///
        string = nameString;  ///

  return string;
}

export function parameterStringFromTypeAndName(type, name) {
  const parameterString = `${type} ${name}`;

  return parameterString;
}

export function returnBlockStringFromExpression(expression, context) {
  const expressionString = expression.asString(context),
        returnBlockString = `Return ${expressionString};`;

  return returnBlockString;
}

export function paramtersStringFromParametersArray(array) {
  const parametersString = array.reduce((parametersString, parameter) => {
    const parameterString = (parameter !== null)?
                               parameter.getString() :
                                 UNDERSCORE;

    parametersString = (parametersString === null) ?
                         parameterString :
                          `${parametersString}, ${parameterString}`;

    return parametersString;
  }, null);

  return parametersString;
}

export function procedureDeclarationStringFromProcedure(procedure) {
  const procedureString = procedure.getString(),
        procedureDeclarationString = `${procedureString};`;

  return procedureDeclarationString;
}

export function bracketedExpressionStringFromBExpression(expression, context) {
  const expressionString = expression.asString(context),
        bracketedExpressionString = `(${expressionString})`;

  return bracketedExpressionString;
}

export function returnBlockStringFromReturnStatementNode(returnStatement, context) {
  const returnStatementString = returnStatement.getString(),
        returnBlockString = `{ ... ${returnStatementString} }`;

  return returnBlockString;
}

export function someStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
  const variableString = variable.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        someString = `Some(${variableString}, ${anonymousProcedureString}) `;

  return someString;
}

export function everyStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
  const variableString = variable.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        everyString = `Every(${variableString}, ${anonymousProcedureString}) `;

  return everyString;
}

export function arrayAssignmentStringFromVariableAndParameters(variable, parameters) {
  const variableString = variable.getString(),
        parametersString = parameters.getString(),
        arrayAssignmentString = `[ ${parametersString} ] = ${variableString};`;

  return arrayAssignmentString;
}

export function variableAssignmentStringFromExpressionAndVariable(expression, variable, context) {
  const variableString = variable.getString(),
        expressionString = expression.asString(context),
        variableAssignmentString = `${variableString} = ${expressionString};`;

  return variableAssignmentString;
}

export function objectAssignmentStringFromVariableAndNamedParameters(variable, namedParameters) {
  const variableString = variable.getString(),
        namedParametersString = namedParameters.getString(),
        objectAssignmentString = `{ ${namedParametersString} } = ${variableString};`;

  return objectAssignmentString;
}

export function varaibleAssignmentsStringFromVariableAssignmentsArray(variableAssignmentsArray) {
  const variableAssignmentsString = variableAssignmentsArray.reduce((variableAssignmentsString, variableAssignment) => {
          const variableAssignmentString = variableAssignment.getString();

          variableAssignmentsString = (variableAssignmentsString === null) ?
                                        variableAssignmentString :
                                         `${variableAssignmentsString}, ${variableAssignmentString}`;

          return variableAssignmentsString;
        }, null),
        string = variableAssignmentsString; ///

  return string;
}

export function anonymousProcedureStringFromTypeParametersAndReturnBlock(type, parameters, returnBlock, context) {
  const typeString = type,  ///
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        anonymousProcedureString = `${typeString} (${parametersString}) ${returnBlockString}`;

  return anonymousProcedureString;
}

export function logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression(disjection, leftExpression, rightExpression, context) {
  const operatorString = disjection ?
                           DISJUNCTION_OPERATOR :
                             CONJUNCTION_OPERATOR,
        leftExpressionString = leftExpression.asString(context),
        rightExpressionString = rightExpression.asString(context),
        logicalExpressionString = `${leftExpressionString} ${operatorString} ${rightExpressionString}`;

  return logicalExpressionString;
}
