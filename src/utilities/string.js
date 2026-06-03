"use strict";

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

export function termStringFromProperties(properties) {
  let termString;

  properties.forEach((property) => {
    if (property !== null) {
      const propertyString = property.getString();

      termString = propertyString;  ///
    }
  });

  return termString;
}

export function valueStringFromProperties(properties) {
  let valueString;

  properties.forEach((property) => {
    if (property !== null) {
      const propertyString = property.getString();

      valueString = propertyString;  ///
    }
  });

  return valueString;
}

export function primtiveStringFromBoolean(boolean) {
  const expresssionString = `${boolean}`;

  return expresssionString;
}

export function primtiveStringFromInteger(integer) {
  const expresssionString = `${integer}`;

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

export function valuesStringFromValuesArray(valuesArray) {
  const valuesString = valuesArray.reduce((valuesString, value) => {
    const valueString = value.getString();

    valuesString = (valuesString === null) ?
                     valueString :
                       `${valuesString}, ${valueString}`;

    return valuesString;
  }, null); ///

  return valuesString;
}

export function primtiveStringFromNominalValue(nominalValue) {
  const string = nominalValue.getString(),
        primtiveString = string;  ///

  return primtiveString;
}

export function expressionStringFromProperties(properties) {
  let expressionString;

  properties.forEach((property) => {
    if (property !== null) {
      const propertyString = property.getString();

      expressionString = propertyString;  ///
    }
  });

  return expressionString;
}

export function primtiveStringFromStringLiteral(stringLiteral) {
  const string = stringFromStringLiteral(stringLiteral),
        primtiveString = string;  ///

  return primtiveString;
}

export function primtiveStringFromNominalValues(nominalValues) {
  const primtiveString = nominalValues.reduce((primitiveString, nominalValue) => {
    const nominalValueString = nominalValue.getString();

    primitiveString = (primitiveString !== null) ?
                       `${primitiveString}, ${nominalValueString}` :
                          nominalValueString; ///

    return primitiveString;
  }, null);

  return primtiveString;
}

export function procedureDeclarationStringFromProcedure(procedure) {
  const type = procedure.getType(),
        label = procedure.getLabel(),
        parameters = procedure.getParameters(),
        returnStatement = procedure.getReturnStatement(),
        typeString = type.getString(),
        labelString = label.getString(),
        parametersString = parameters.getString(),
        returnStatementString = returnStatement.getString(),
        procedureDelcarationString = `${typeString} ${labelString }(${parametersString}) { ... ${returnStatementString} }`;

  return procedureDelcarationString;
}

export function returnBlockStringFromReturnStatementNode(returnStatement) {
  const returnStatementString = returnStatement.getString(),
        returnBlockString = `{ ... ${returnStatementString} }`;

  return returnBlockString;
}

export function nominalValuePropertyStringFromNameAndType(name, type) {
  const nameString = name,  ///
        typeString = type.getString(),
        nominalValuePropertyString = `${typeString} ${nameString}`;

  return nominalValuePropertyString;
}

export function typeStringFromTypeNameAndArgumentTypeName(typeName, argumentTypeName) {
  let typeString;

  typeString = `${typeName}`;

  if (argumentTypeName !== null) {
    typeString = `${typeString}<${argumentTypeName}>`;
  }

  return typeString;
}

export function variableAssignmentStringFromTypeAndVariable(type, variable) {
  const typeString = type.getString(),
        variableString = variable.getString(),
        variableAssignmentString = `${typeString} ${variableString} = ... ;`;

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
  const typeString = type.getString(),
        labelString = label.getString(),
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        procedureString = `${typeString} ${labelString}(${parametersString}) ${returnBlockString}`;

  return procedureString;
}

export function anonymousProcedureStringFromTypeParametersAndReturnBlock(type, parameters, returnBlock) {
  const typeString = type.getString(),
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        anonymousProcedureString = `${typeString} (${parametersString}) ${returnBlockString}`;

  return anonymousProcedureString;
}

export function nominalValuePropertiesStringFromNominalValuePropertiesArray(nominalValuePropertiesArray) {
  const nominalValuePropertiesString = nominalValuePropertiesArray.reduce((nominalValuePropertiesString, nominalValueProperty) => {
    const nominalValuePropertyString = nominalValueProperty.getString();

    nominalValuePropertiesString = (nominalValuePropertiesString === null) ?
                                     nominalValuePropertyString :
                                      `${nominalValuePropertiesString}, ${nominalValuePropertyString}`;

    return nominalValuePropertiesString;
  }, null);

  return nominalValuePropertiesString;
}

export function variableAssignmentStringFromTypeAndVariableAssignmentsArray(type, variableAssignmentsArray) {
  let variableAssignmentsString;

  const typeString = type.getString();

  variableAssignmentsString = variableAssignmentsArray.reduce((variableAssignmentsString, variableAssignment) => {
    const variableAssignmentString = variableAssignmentStringFromVariableAssignment(variableAssignment);

    variableAssignmentsString = (variableAssignmentsString === null) ?
      variableAssignmentString :
      `${variableAssignmentsString}, ${variableAssignmentString}`;

    return variableAssignmentsString;
  }, null); ///

  variableAssignmentsString = `${typeString} ${variableAssignmentsString} ;`; ///

  return variableAssignmentsString;
}

export function reduceStringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
  const variableString = variable.getString(),
        initialExpressionString = initialExpression.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        reduceString = `Reduce(${variableString}, ${anonymousProcedureString}, ${initialExpressionString})`;

  return reduceString;
}

