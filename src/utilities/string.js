"use strict";

import nullNode from "../nullNode";

import { NULL } from "../constants";
import { stringFromStringLiteral } from "./stringLiteral";

export function ternaryStringFromTerm(term) {
  const termString = term.getString(),
        ternaryString = `if (${termString}) { ... } else { ... }`;

  return ternaryString;
}

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

export function termsStringFromTermsArray(termsArray) {
  const termsString = termsArray.reduce((termsString, term) => {
    const termString = term.getString();

    termsString = (termsString === null) ?
                    termString :
                     `${termsString}, ${termString}`;

    return termsString;
  }, null); ///

  return termsString;
}

export function primtiveStringFromStringLiteral(stringLiteral) {
  const string = stringFromStringLiteral(stringLiteral),
        primtiveString = string;  ///

  return primtiveString;
}

export function termStringFromPrimitiveAndProperties(primitive, properties) {
  let termString;

  if (false) {
    ///
  } else if (primitive !== null) {
    const primitiveString = primitive.toString();

    termString = primitiveString; ///
  } else {
    properties.forEach((property) => {
      if (property !== null) {
        const propertyString = property.getString();

        termString = propertyString;  ///
      }
    });
  }

  return termString;
}

export function procedureDeclarationStringFromProcedure(procedure) {
  const type = procedure.getType(),
        label = procedure.getLabel(),
        parameters = procedure.getParameters(),
        returnStatement = procedure.getReturnStatement(),
        labelString = label.getString(),
        parametersString = parameters.getString(),
        returnStatementString = returnStatement.getString(),
        procedureDelcarationString = `${type} ${labelString }(${parametersString}) { ... ${returnStatementString} }`;

  return procedureDelcarationString;
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

export function variableAssignmentStringFromTypeAndVariable(type, variable) {
  const variableString = variable.getString(),
        variableAssignmentString = `${type} ${variableString} = ... ;`;

  return variableAssignmentString;
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

export function variableAssignmentStringFromVariableAssignment(variableAssignment) {
  const variable = variableAssignment.getVariable(),
        variableString = variable.getString(),
        variableAssignmentString = `${variableString} = ...`;

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

export function variableAssignmentStringFromTypeAndVariableAssignmentsArray(type, variableAssignmentsArray) {
  let variableAssignmentsString = variableAssignmentsArray.reduce((variableAssignmentsString, variableAssignment) => {
    const variableAssignmentString = variableAssignmentStringFromVariableAssignment(variableAssignment);

    variableAssignmentsString = (variableAssignmentsString === null) ?
      variableAssignmentString :
      `${variableAssignmentsString}, ${variableAssignmentString}`;

    return variableAssignmentsString;
  }, null); ///

  variableAssignmentsString = `${type} ${variableAssignmentsString}`; ///

  return variableAssignmentsString;
}

export function reduceStringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
  const variableString = variable.getString(),
        initialExpressionString = initialExpression.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        reduceString = `Reduce(${variableString}, ${anonymousProcedureString}, ${initialExpressionString})`;

  return reduceString;
}

