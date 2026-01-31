"use strict";

import { EQUAL_TO, UNDERSCORE, NOT_EQUAL_TO, EMPTY_STRING, DISJUNCTION_OPERATOR, CONJUNCTION_OPERATOR } from "../constants";

export function stringFromName(name, context) {
  const string = name;  ///

  return string;
}

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

export function expressionsStringFromExpressionsArray(array, context) {
  const expressionsString = array.reduce((expressionsString, expression) => {
    const expressionString = expression.asString(context);

    expressionsString = (expressionsString === null) ?
                          expressionString :
                            `${expressionsString}, ${expressionString}`;

    return expressionsString;
  }, null); ///

  return expressionsString;
}

export function negatedExpressionStringFromExpression(expression, context) {
  const expressionString = expression.asString(context),
       negatedExpressionString = `!${expressionString}`;

  return negatedExpressionString;
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

export function namedParameterStringFromTypeNameAndAsName(type, name, asName, context) {
  let namedParamterString;

  const typeString = type,  ///
        nameString = name;  ///

  namedParamterString = `${typeString} ${nameString}`;

  if (asName !== null) {
    const asNameString = asName;  ///

    namedParamterString = `${namedParamterString} As ${asNameString}`;
  }

  return namedParamterString;
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

export function namedParametersStringFromNamedParamtersArray(namedParametersArray, context) {
  const namedParametersString = namedParametersArray.reduce((namedParametersString, namedParameter) => {
    const namedParameterString = namedParameter.getString();

    namedParametersString = (namedParametersString === null) ?
                              namedParameterString :
                               `${namedParametersString}, ${namedParameterString}`;

    return namedParametersString;
  }, null);

  return namedParametersString;
}

export function arrayAssignmentStringFromVariableAndParameters(variable, parameters) {
  const variableString = variable.getString(),
        parametersString = parameters.getString(),
        arrayAssignmentString = `[ ${parametersString} ] = ${variableString};`;

  return arrayAssignmentString;
}

export function procedureCallStringFromReferenceAndExpressions(reference, expressions, context) {
  const expressionsString = expressions.getString(),
        referenceString = reference.getString(),
        procedureCallString = `${referenceString}(${expressionsString})`;

  return procedureCallString;
}

export function variableAssignmentStringFromExpressionAndVariable(expression, variable, context) {
  const variableString = variable.getString(),
        expressionString = expression.asString(context),
        variableAssignmentString = `${variableString} = ${expressionString};`;

  return variableAssignmentString;
}

export function procedureStringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock) {
  const typeString = type,  ///
        labelString = label.getString(),
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        procedureString = `${typeString} ${labelString}(${parametersString}) ${returnBlockString}`;

  return procedureString;
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

export function ternaryStringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context) {
  const expressionString = expression.asString(context),
        ifExpressionString = ifExpression.asString(context),
        elseExpressionString = elseExpression.asString(context),
        ternaryString = `If (${expressionString}) ${ifExpressionString} Else ${elseExpressionString};`;

  return ternaryString;
}

export function comparisonStringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression, context) {
  const operatorString = negated ?
                           EQUAL_TO :
                             NOT_EQUAL_TO,
        leftExpressionString = leftExpression.asString(context),
        rightExpressionString = rightExpression.asString(context),
        comparisonString = `${leftExpressionString} ${operatorString} ${rightExpressionString}`;

  return comparisonString;
}

export function reduceStringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
  const variableString = variable.getString(),
        initialExpressionString = initialExpression.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        reduceString = `Reduce(${variableString}, ${anonymousProcedureString}, ${initialExpressionString})`;

  return reduceString;
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
