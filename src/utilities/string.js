"use strict";

import nullNode from "../nullNode";

import { stringFromStringLiteral } from "./stringLiteral";
import { NULL, EQUAL_TO, UNDERSCORE, NOT_EQUAL_TO, DISJUNCTION_OPERATOR, CONJUNCTION_OPERATOR } from "../constants";

export function variableStringFromName(name) {
  const nameString = name,  ///
        string = nameString;  ///

  return string;
}

export function expressionStringFromNode(node, context) {
  const expressionString = (node === nullNode) ?
                             NULL :
                               context.nodeAsString(node);

  return expressionString;
}

export function expressionStringFromNodes(nodes, context) {
  const string = context.nodesAsString(nodes),
        expressionString = string;  ///

  return expressionString;
}

export function expressionStringFromBoolean(boolean) {
  const expresssionString = `${boolean}`;

  return expresssionString;
}

export function parameterStringFromTypeAndName(type, name) {
  const parameterString = `${type} ${name}`;

  return parameterString;
}

export function returnBlockStringFromExpression(expression) {
  const expressionString = expression.getString(),
        returnBlockString = `Return ${expressionString};`;

  return returnBlockString;
}

export function expressionStringFromStringLiteral(stringLiteral) {
  const string = stringFromStringLiteral(stringLiteral),
        expressionString = string;  ///

  return expressionString;
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

export function expressionsStringFromExpressionsArray(array) {
  const expressionsString = array.reduce((expressionsString, expression) => {
    const expressionString = expression.getString();

    expressionsString = (expressionsString === null) ?
                          expressionString :
                            `${expressionsString}, ${expressionString}`;

    return expressionsString;
  }, null); ///

  return expressionsString;
}

export function negatedExpressionStringFromExpression(expression) {
  const expressionString = expression.getString(),
       negatedExpressionString = `!${expressionString}`;

  return negatedExpressionString;
}

export function procedureDeclarationStringFromProcedure(procedure) {
  const procedureString = procedure.getString(),
        procedureDeclarationString = `${procedureString};`;

  return procedureDeclarationString;
}

export function bracketedExpressionStringFromBExpression(expression) {
  const expressionString = expression.getString(),
        bracketedExpressionString = `(${expressionString})`;

  return bracketedExpressionString;
}

export function returnBlockStringFromReturnStatementNode(returnStatement) {
  const returnStatementString = returnStatement.getString(),
        returnBlockString = `{ ... ${returnStatementString} }`;

  return returnBlockString;
}

export function namedParameterStringFromTypeNameAndAsName(type, name, asName) {
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

export function someStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure) {
  const variableString = variable.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        someString = `Some(${variableString}, ${anonymousProcedureString}) `;

  return someString;
}

export function everyStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure) {
  const variableString = variable.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        everyString = `Every(${variableString}, ${anonymousProcedureString}) `;

  return everyString;
}

export function namedParametersStringFromNamedParamtersArray(namedParametersArray) {
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

export function procedureCallStringFromReferenceAndExpressions(reference, expressions) {
  const expressionsString = expressions.getString(),
        referenceString = reference.getString(),
        procedureCallString = `${referenceString}(${expressionsString})`;

  return procedureCallString;
}

export function variableAssignmentStringFromExpressionAndVariable(expression, variable) {
  const variableString = variable.getString(),
        expressionString = expression.getString(),
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

export function anonymousProcedureStringFromTypeParametersAndReturnBlock(type, parameters, returnBlock) {
  const typeString = type,  ///
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        anonymousProcedureString = `${typeString} (${parametersString}) ${returnBlockString}`;

  return anonymousProcedureString;
}

export function ternaryStringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression) {
  const expressionString = expression.getString(),
        ifExpressionString = ifExpression.getString(),
        elseExpressionString = elseExpression.getString(),
        ternaryString = `If (${expressionString}) ${ifExpressionString} Else ${elseExpressionString};`;

  return ternaryString;
}

export function comparisonStringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression) {
  const operatorString = negated ?
                           EQUAL_TO :
                             NOT_EQUAL_TO,
        leftExpressionString = leftExpression.getString(),
        rightExpressionString = rightExpression.getString(),
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

export function expressionStringFromNodeNodesNumberBooleanStringLiteralAndProperties(node, nodes, number, boolean, stringLiteral, properties, context) {
  let expressionString;

  if (false) {
    ///
  } else if (node !== null) {
    expressionString = expressionStringFromNode(node, context);
  } else if (nodes !== null) {
    expressionString = expressionStringFromNodes(nodes, context);
  } else if (number !== null) {
    expressionString = expressionStringFromNumber(number);
  } else if (boolean !== null) {
    expressionString = expressionStringFromBoolean(boolean);
  } else if (stringLiteral !== null) {
    expressionString = expressionStringFromStringLiteral(stringLiteral);
  } else {
    properties.forEach((property) => {
      if (property !== null) {
        const propertyString = property.getString();

        expressionString = propertyString;  ///
      }
    });
  }

  return expressionString;
}

export function logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression(disjection, leftExpression, rightExpression) {
  const operatorString = disjection ?
                           DISJUNCTION_OPERATOR :
                             CONJUNCTION_OPERATOR,
        leftExpressionString = leftExpression.getString(),
        rightExpressionString = rightExpression.getString(),
        logicalExpressionString = `${leftExpressionString} ${operatorString} ${rightExpressionString}`;

  return logicalExpressionString;
}
