"use strict";

import elements from "../elements";

import { stepStringFromNothing,
         variableStringFromName,
         parameterStringFromTypeAndName,
         returnBlockStringFromExpression,
         paramtersStringFromParametersArray,
         procedureDeclarationStringFromProcedure,
         bracketedExpressionStringFromBExpression,
         returnBlockStringFromReturnStatementNode,
         someStringFromVariableAndAnonymousProcedure,
         everyStringFromVariableAndAnonymousProcedure,
         arrayAssignmentStringFromVariableAndParameters,
         variableAssignmentStringFromExpressionAndVariable,
         objectAssignmentStringFromVariableAndNamedParameters,
         varaibleAssignmentsStringFromVariableAssignmentsArray,
         anonymousProcedureStringFromTypeParametersAndReturnBlock } from "../utilities/string";

export function stepFromStepNode(stepNode, context) {
  const { Step } = elements,
        arrayAssignment = arrayAssignmentFromStepNode(stepNode, context),
        objectAssigment = objectAssignmentFromStepNode(stepNode, context),
        variablesDeclaration = variableAssignmentsFromStepNode(stepNode, context),
        stepString = stepStringFromNothing(context),
        string = stepString,  ///
        step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);

  return step;
}

export function someFromSomeNode(someNode, context) {
  const { Some } = elements,
        variable = variableFromSomeNode(someNode, context),
        anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context),
        someString = someStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context),
        string = someString,  ///
        some = new Some(string, variable, anonymousProcedure);

  return some;
}

export function everyFromEveryNode(everyNode, context) {
  const { Every } = elements,
        anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context),
        variable = variableFromEveryNode(everyNode, context),
        everyString = everyStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context),
        string = everyString, ///
        every = new Every(string, variable, anonymousProcedure);

  return every;
}

export function variableFromVariableNode(variableNode, context) {
  const { Variable } = elements,
        type = typeFromVariableNode(variableNode, context),
        name = nameFromVariableNode(variableNode, context),
        expression = expressionfFromVariableNode(variableNode, context),
        variableString = variableStringFromName(name, context),
        string = variableString,  ///
        variable = new Variable(string, type, name, expression);

  return variable;
}

export function parameterFromParameterNode(parameterNode, context) {
  let parameter = null;

  const type = typeFromParaneterNode(parameterNode, context);

  if (type !== null) {
    const { Parameter } = elements,
          name = nameFromParaneterNode(parameterNode, context),
          parameterString = parameterStringFromTypeAndName(type, name, context),
          string = parameterString; ///

    parameter = new Parameter(string, type, name);
  }

  return parameter;
}

export function parametersFromParametersNode(parametersNode, context) {
  const { Parameters } = elements,
        paramtersArray = paramtersArrayFromParametersNode(parametersNode, context),
        parametersString = paramtersStringFromParametersArray(paramtersArray, context),
        string = parametersString,  ///
        array = paramtersArray, ///
        parameters = new Parameters(string, array);

  return parameters;
}

export function expressionFromExpressionNode(expressionNode, context) {
  const { Every, Reduce, Expression, Ternary, Variable, NodeQuery, NodesQuery, Comparison, ReturnBlock, ProcedureCall, NegatedExpression, LogicalExpression } = elements,
        node = nodeFromExpressionNode(expressionNode, context),
        nodes = nodesFromExpressionNode(expressionNode, context),
        number = numberFromExpressionNode(expressionNode, context),
        string = stringFromExpressionNode(expressionNode, context),
        boolean = booleanFromExpressionNode(expressionNode, context),
        some = someFromExpressionNode(expressionNode, context),
        every = Every.fromExpressionNode(expressionNode, context),
        reduce = Reduce.fromExpressionNode(expressionNode, context),
        ternary = Ternary.fromExpressionNode(expressionNode, context),
        variable = Variable.fromExpressionNode(expressionNode, context),
        nodeQuery = NodeQuery.fromExpressionNode(expressionNode, context),
        nodesQuery = NodesQuery.fromExpressionNode(expressionNode, context),
        comparison = Comparison.fromExpressionNode(expressionNode, context),
        returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context),
        procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context),
        negatedExpression = NegatedExpression.fromExpressionNode(expressionNode, context),
        logicalExpression = LogicalExpression.fromExpressionNode(expressionNode, context),
        bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context),
        expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function returnBlockFromReturnBlockNode(returnBlockNode, context) {
  const { ReturnBlock } = elements,
        steps = stepsFromReturnBlockNode(returnBlockNode, context),
        nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context),
        returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context),
        returnBlockString = returnBlockStringFromReturnStatementNode(returnStatement, context),
        string = returnBlockString, ///
        returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);

  return returnBlock;
}

export function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const { Variable, ArrayAssignment } = elements,
        parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context),
        variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context),
        arrayAssignmentString = arrayAssignmentStringFromVariableAndParameters(variable, parameters),
        string = arrayAssignmentString, ///
        arrayAssignment = new ArrayAssignment(string, variable, parameters);

  return arrayAssignment;
}

export function returnStatementFromReturnStatementNode(returnStatementNode, context) {
  const { ReturnStatement } = elements,
        expression = expressionFromReturnStatementNode(returnStatementNode, context),
        returnBlockString = returnBlockStringFromExpression(expression, context),
        string = returnBlockString,  ///
        returnStatement = new ReturnStatement(string, expression);

  return returnStatement;
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

export function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const { AnonymousProcedure } = elements,
        type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context),
        parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context),
        returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context),
        nonymousProcedureString = anonymousProcedureStringFromTypeParametersAndReturnBlock(type, parameters, returnBlock, context),
        string = nonymousProcedureString, ///
        anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);

  return anonymousProcedure;
}

export function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
  const { BracketedExpression } = elements,
        expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context),
        bracketedExpressionString = bracketedExpressionStringFromBExpression(expression, context),
        string = bracketedExpressionString, ///
        bracketedExpression = new BracketedExpression(string, expression);

  return bracketedExpression;
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

export function variableFromSomeNode(someNode, context) {
  const variableNode = someNode.getVariableNode(), ///
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function typeFromVariableNode(variableNode, context) {
  const type = null;

  return type;
}

export function nameFromVariableNode(variableNode) {
  const name = variableNode.getName();

  return name;
}

export function variableFromEveryNode(everyNode, context) {
  const variableNode = everyNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function typeFromParaneterNode(parameterNode, context) {
  const type = parameterNode.getType();

  return type;
}

export function nameFromParaneterNode(parameterNode, context) {
  const name = parameterNode.getName();

  return name;
}

export function nodeFromExpressionNode(expressionNode, context) {
  const node = expressionNode.getNode();

  return node;
}

export function someFromExpressionNode(expressionNode, context) {
  let some = null;

  const someNode = expressionNode.getSomeNode();

  if (someNode !== null) {
    some = someFromSomeNode(someNode, context);
  }

  return some;
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

export function stepsFromReturnBlockNode(returnBlockNode, context) {
  const stepNodes = returnBlockNode.getStepNodes(),
        steps = stepNodes.map((stepNode) => {
          const step = stepFromStepNode(stepNode, context);

          return step;
        });

  return steps;
}

export function booleanFromExpressionNode(expressionNode, context) {
  const boolean = expressionNode.getBoolean();

  return boolean;
}

export function expressionfFromVariableNode(variableNode, context) {
  const expression = null;

  return expression;
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

export function anonymousProcedureFromSomeNode(someNode, context) {
  const anonymousProcedureNode = someNode.getAnonymousProcedureNode(),
    anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

  return anonymousProcedure;
}

export function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
  const nonsensical = returnBlockNode.isNonsensical();

  return nonsensical;
}

export function variableAssignmentsFromStepNode(stepNode, context) {
  let variableAssignments = null;

  const variableAssignmentsNode = stepNode.getVariableAssignmentsNode();

  if (variableAssignmentsNode !== null) {
    variableAssignments = variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context);
  }

  return variableAssignments;
}

export function variableFromTypeAndVariableNode(type, variableNode, context) {
  const { Variable } = elements,
        name = nameFromVariableNode(variableNode),
        expression = expressionfFromVariableNode(variableNode, context),
        variableString = variableStringFromName(name, context),
        string = variableString,  ///
        variable = new Variable(string, type, name, expression);

  return variable;
}

export function anonymousProcedureFromEveryNode(everyNode, context) {
  const anonymousProcedureNode = everyNode.getAnonymousProcedureNode(),
        anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

  return anonymousProcedure;
}

export function anonymousProcedureFromReduceNode(reduceNode, context) {
  const anonymousProcedureNode = reduceNode.getAnonymousProcedureNode(),
        anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

  return anonymousProcedure;
}

export function expressionFromReturnStatementNode(returnStatementNode, context) {
  const expressionNode = returnStatementNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context);

  return expression;
}

export function parametersFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const parametersNode = arrayAssignmentNode.getParametersNode(),
    parameters = parametersFromParametersNode(parametersNode, context);

  return parameters;
}

export function returnStatementFromReturnBlockNode(returnBlockNode, context) {
  const returnStatementNode = returnBlockNode.getReturnStatementNode(),
        returnStatement = returnStatementFromReturnStatementNode(returnStatementNode, context);

  return returnStatement;
}

export function parametersFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const parametersNode = anonymousProcedureNode.getParametersNode(),
    parameters = parametersFromParametersNode(parametersNode, context);

  return parameters;
}

export function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const returnBlockNode = anonymousProcedureNode.getReturnBlockNode(),
        returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

  return returnBlock;
}

export function bracketedExpressionFromExpressionNode(expressionNode, context) {
  let bracketedExpression = null;

  const bracketedExpressionNode = expressionNode.getBracketedExpressionNode();

  if (bracketedExpressionNode !== null) {
    bracketedExpression = bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context);
  }

  return bracketedExpression;
}

export function expressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
  const expressionNode = bracketedExpressionNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context);

  return expression;
}

export function parametersFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const parametersNode = procedureDeclarationNode.getParametersNode(),
        parameters = parametersFromParametersNode(parametersNode, context);

  return parameters;
}

export function typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context) {
  const type = anonymousProcedureNode.getType();

  return type;
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

export function paramtersArrayFromParametersNode(parametersNode, context) {
  const parameterNodes = parametersNode.getParameterNodes(),
        paramtersArray = parameterNodes.map((parameterNode) => { ///
          const parameter = parameterFromParameterNode(parameterNode, context);

          return parameter;
        });

  return paramtersArray;
}

