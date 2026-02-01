"use strict";

import nullNode from "../nullNode";

import { NULL } from "../constants";
import { stringFromStringLiteral } from "./stringLiteral";

export function variableStringFromName(name) {
  const variableString = name;  ///

  return variableString;
}

export function primtiveStringFromNode(node, context) {
  const primtiveString = (node === nullNode) ?
                             NULL :
                               context.nodeAsString(node);

  return primtiveString;
}

export function primtiveStringFromNodes(nodes, context) {
  const string = context.nodesAsString(nodes),
        primtiveString = string;  ///

  return primtiveString;
}

export function primtiveStringFromBoolean(boolean) {
  const expresssionString = `${boolean}`;

  return expresssionString;
}

export function primtiveStringFromStringLiteral(stringLiteral) {
  const string = stringFromStringLiteral(stringLiteral),
        primtiveString = string;  ///

  return primtiveString;
}

export function primitivesStringFromPrimitivesArray(primitivesArray) {
  const primitivesString = primitivesArray.reduce((primitivesString, primitive) => {
    const primitiveString = primitive.getString();

    primitivesString = (primitivesString === null) ?
                         primitiveString :
                           `${primitivesString}, ${primitiveString}`;

    return primitivesString;
  }, null); ///

  return primitivesString;
}

export function returnBlockStringFromReturnStatementNode(returnStatement) {
  const returnStatementString = returnStatement.getString(),
        returnBlockString = `{ ... ${returnStatementString} }`;

  return returnBlockString;
}

export function expressionStringFromPrimitiveAndProperties(primitive, properties) {
  let expressionString;

  if (false) {
    ///
  } else if (primitive !== null) {
    const primitiveString = primitive.toString();

    expressionString = primitiveString; ///
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

export function anonymousProcedureStringFromTypeParametersAndReturnBlock(type, parameters, returnBlock) {
  const typeString = type,  ///
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        anonymousProcedureString = `${typeString} (${parametersString}) ${returnBlockString}`;

  return anonymousProcedureString;
}

export function reduceStringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
  const variableString = variable.getString(),
        initialExpressionString = initialExpression.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        reduceString = `Reduce(${variableString}, ${anonymousProcedureString}, ${initialExpressionString})`;

  return reduceString;
}

