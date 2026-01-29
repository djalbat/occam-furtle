"use strict";

import elements from "../elements";

import { procedureDeclarationStringFromProcedure,
         arrayAssignmentStringFromVariableAndParameters,
         variableAssignmentStringFromExpressionAndVariable,
         objectAssignmentStringFromVariableAndNamedParameters,
         varaibleAssignmentsStringFromVariableAssignmentsArray } from "../utilities/string";

export function nodeFromExpressionNode(expressionNode, context) {
  const node = expressionNode.getNode();

  return node;
}

export function nodesFromExpressionNode(expressionNode, context) {
  const nodes = null;  ///

  return nodes;
}

export function stringFromExpressionNode(expressionNode, context) {
  const string = expressionNode.getString();

  return string;
}

export function numberFromExpressionNode(expressionNode, context) {
  const number = expressionNode.getNumber();

  return number;
}

export function booleanFromExpressionNode(expressionNode, context) {
  const boolean = expressionNode.getBoolean();

  return boolean;
}

export function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const { Variable, Parameters, ArrayAssignment } = elements,
        parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context),
        variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context),
        arrayAssignmentString = arrayAssignmentStringFromVariableAndParameters(variable, parameters),
        string = arrayAssignmentString, ///
        arrayAssignment = new ArrayAssignment(string, variable, parameters);

  return arrayAssignment;
}

export function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
  const { Variable, NamedParameters, ObjectAssigment } = elements,
        namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context),
        variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context),
        objectAssignmentString = objectAssignmentStringFromVariableAndNamedParameters(variable, namedParameters, context),
        string = objectAssignmentString,  ///
        objectAssignment = new ObjectAssigment(string, variable, namedParameters);

  return objectAssignment;
}

export function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
  const { VariableAssignments } = elements,
        variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context),
        variableAssignmentsString = varaibleAssignmentsStringFromVariableAssignmentsArray(variableAssignmentsArray, context),
        string = variableAssignmentsString, ///
        array = variableAssignmentsArray, ///
        variableAssignments = new VariableAssignments(string, array);

  return variableAssignments;
}

export function arrayAssignmentFromStepNode(stepNode, context) {
  let arrayAssignment = null;

  const arrayAssignmentNode = stepNode.getArrayAssignmentNode();

  if (arrayAssignmentNode !== null) {
    arrayAssignment = arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context);
  }

  return arrayAssignment;
}

export function objectAssignmentFromStepNode(stepNode, context) {
  let objectAssignment = null;

  const objectAssignmentNode = stepNode.getObjectAssignmentNode();

  if (objectAssignmentNode !== null) {
    objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
  }

  return objectAssignment;
}

export function variableAssignmentsFromStepNode(stepNode, context) {
  let variableAssignments = null;

  const variableAssignmentsNode = stepNode.getVariableAssignmentsNode();

  if (variableAssignmentsNode !== null) {
    variableAssignments = variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context);
  }

  return variableAssignments;
}

export function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Procedure, ProcedureDeclaration } = elements,
        procedure = Procedure.fromProcedureDeclarationNode(procedureDeclarationNode, context),
        procedureDeclarationString = procedureDeclarationStringFromProcedure(procedure),
        string = procedureDeclarationString,  ///
        procedureDeclaration = new ProcedureDeclaration(string, procedure);

  return procedureDeclaration;
}

export function variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context) {
  const type = variableAssignmentsNode.getType(),
        variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(),
        variableAssignmentsArray = variableAssignmentNodes.map((variableAssignmentNode) => {
          const variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);

          return variableAssignment;
        });

  return variableAssignmentsArray;
}

export function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const { Variable, Expression, VariableAssignment } = elements,
        expression = Expression.fromVariableAssignmentNode(variableAssignmentNode, context),
        variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context),
        variableAssignmentString = variableAssignmentStringFromExpressionAndVariable(expression, variable, context),
        string = variableAssignmentString,  ///
        assignment = new VariableAssignment(string, variable, expression);

  return assignment;
}
