"use strict";

export function procedureDeclarationStringFromProcedure(procedure) {
  const procedureString = procedure.getString(),
        procedureDeclarationString = `${procedureString};`;

  return procedureDeclarationString;
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
