"use strict";

import { Query } from "occam-query";

import elements from "../elements";

import { BOOLEAN_TYPE } from "../types";
import { stringFromStringLiteral } from "../utilities/stringLiteral";
import { stepStringFromNothing,
         variableStringFromName,
         parameterStringFromTypeAndName,
         returnBlockStringFromExpression,
         paramtersStringFromParametersArray,
         negatedExpressionStringFromExpression,
         procedureDeclarationStringFromProcedure,
         bracketedExpressionStringFromBExpression,
         returnBlockStringFromReturnStatementNode,
         someStringFromVariableAndAnonymousProcedure,
         everyStringFromVariableAndAnonymousProcedure,
         arrayAssignmentStringFromVariableAndParameters,
         variableAssignmentStringFromExpressionAndVariable,
         objectAssignmentStringFromVariableAndNamedParameters,
         varaibleAssignmentsStringFromVariableAssignmentsArray,
         anonymousProcedureStringFromTypeParametersAndReturnBlock,
         ternaryStringFromExpressionIfExpressionAndElseExpression,
         reduceStringFromVariableInitialExpressionAndAnonymousProcedure,
         logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression } from "../utilities/string";

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

export function reduceFromReduceNode(reduceNode, context) {
  const { Reduce } = elements,
        variable = variableFromReduceNode(reduceNode, context),
        initialExpression = initialExpressionFromReduceNode(reduceNode, context),
        anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context),
        reduceString = reduceStringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure),
        string = reduceString,  ///
        reduce = new Reduce(string, variable, initialExpression, anonymousProcedure);

  return reduce;
}

export function ternaryFromTernaryNode(ternaryNode, context) {
  const { Ternary } = elements,
        expressionNode = ternaryNode.getExpressionNode(),
        ifExpressionNode = ternaryNode.getIfExpressionNode(),
        elseExpressionNode = ternaryNode.getElseExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context),
        ifExpression = expressionFromExpressionNode(ifExpressionNode, context),
        elseExpression = expressionFromExpressionNode(elseExpressionNode, context),
        ternaryString = ternaryStringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression, context),
        string = ternaryString, ///
        ternary = new Ternary(string, expression, ifExpression, elseExpression);

  return ternary;
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

export function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
  const { NodeQuery } = elements,
        node = nodeQueryNode, ///
        string = context.nodeAsString(node),
        variable = variableFromNodeQueryNode(nodeQueryNode, context),
        query = queryFromNodeQueryNode(nodeQueryNode, context),
        nodeQuery = new NodeQuery(string, variable, query);

  return nodeQuery;
}

export function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
  const { NodesQuery } = elements,
        node = nodesQueryNode,  ///
        string = context.nodeAsString(node),
        variable = variableFromNodesQueryNode(nodesQueryNode, context),
        query = queryFromNodesQueryNode(nodesQueryNode, context),
        nodesQuery = new NodesQuery(string, variable, query);

  return nodesQuery;
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
  const { Expression, NodesQuery, Comparison, ReturnBlock, ProcedureCall } = elements,
        node = nodeFromExpressionNode(expressionNode, context),
        nodes = nodesFromExpressionNode(expressionNode, context),
        number = numberFromExpressionNode(expressionNode, context),
        string = stringFromExpressionNode(expressionNode, context),
        boolean = booleanFromExpressionNode(expressionNode, context),
        some = someFromExpressionNode(expressionNode, context),
        every = everyFromExpressionNode(expressionNode, context),
        reduce = reduceFromExpressionNode(expressionNode, context),
        ternary = ternaryFromExpressionNode(expressionNode, context),
        variable = variableFromExpressionNode(expressionNode, context),
        nodeQuery = nodeQueryFromExpressionNode(expressionNode, context),
        nodesQuery = nodesQueryFromExpressionNode(expressionNode, context),
        comparison = Comparison.fromExpressionNode(expressionNode, context),
        returnBlock = ReturnBlock.fromExpressionNode(expressionNode, context),
        procedureCall = ProcedureCall.fromExpressionNode(expressionNode, context),
        negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context),
        logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context),
        bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context),
        expression = new Expression(node, nodes, number, string, boolean, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  if ((node === null) &&
      (nodes === null) &&
      (number === null) &&
      (string === null) &&
      (boolean === null) &&
      (some === null) &&
      (every === null) &&
      (reduce === null) &&
      (ternary === null) &&
      (variable === null) &&
      (nodeQuery === null) &&
      (nodesQuery === null) &&
      (comparison === null) &&
      (returnBlock === null) &&
      (procedureCall === null) &&
      (negatedExpression === null) &&
      (logicalExpression === null) &&
      (bracketedExpression === null)) {

    debugger
  }


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

export function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
  const { NegatedExpression } = elements,
        expressionNode = negatedExpressionNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context),
        type = typeFromNegatedExpressionNode(expressionNode, context),
        negatedExpressionString = negatedExpressionStringFromExpression(expression, context),
        string = negatedExpressionString, ///
        negatedExpression = new NegatedExpression(string, type, expression);

  return negatedExpression;
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

export function variableFromReduceNode(reduceNode, context) {
  const variableNode = reduceNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function queryFromNodeQueryNode(nodeQueryNode, context) {
  const stringLiteral = nodeQueryNode.getStringLiteral(),
        string = stringFromStringLiteral(stringLiteral),
        expressionString = string,
        query = Query.fromExpressionString(expressionString);

  return query;
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

export function queryFromNodesQueryNode(nodesQueryNode, context) {
  const stringLiteral = nodesQueryNode.getStringLiteral(),
        string = stringFromStringLiteral(stringLiteral),
        expressionString = string,
        query = Query.fromExpressionString(expressionString);

  return query;
}

export function nodesFromExpressionNode(expressionNode, context) {
  const nodes = null;  ///

  return nodes;
}

export function everyFromExpressionNode(expressionNode, context) {
  let every = null;

  const everyNode = expressionNode.getEveryNode();

  if (everyNode !== null) {
    every = everyFromEveryNode(everyNode, context);
  }

  return every;
}

export function expressionFromReduceNode(reduceNode, context) {
  const expressionNode = reduceNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context);

  return expression;
}

export function reduceFromExpressionNode(expressionNode, context) {
  let reduce = null;

  const reduceNode = expressionNode.getReduceNode();

  if (reduceNode !== null) {
    reduce = reduceFromReduceNode(reduceNode, context);
  }

  return reduce;
}

export function stringFromExpressionNode(expressionNode, context) {
  let string = null;

  const stringLiteral = expressionNode.getStringLiteral();

  if (stringLiteral !== null) {
    string = stringFromStringLiteral(stringLiteral);
  }

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

export function variableFromNodeQueryNode(nodeQueryNode, context) {
  const variableNode = nodeQueryNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function booleanFromExpressionNode(expressionNode, context) {
  const boolean = expressionNode.getBoolean();

  return boolean;
}

export function ternaryFromExpressionNode(expressionNode, context) {
  let ternary = null;

  const ternaryNode = expressionNode.getTernaryNode();

  if (ternaryNode !== null) {
    ternary = ternaryFromTernaryNode(ternaryNode, context);
  }

  return ternary;
}

export function variableFromNodesQueryNode(nodesQueryNode, context) {
  const variableNode = nodesQueryNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function variableFromExpressionNode(expressionNode, context) {
  let variable = null;

  const variableNode = expressionNode.getVariableNode();

  if (variableNode !== null) {

    variable = variableFromVariableNode(variableNode, context);
  }

  return variable;
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

export function nodeQueryFromExpressionNode(expressionNode, context) {
  let nodeQuery = null;

  const nodeQueryNode = expressionNode.getNodeQueryNode();

  if (nodeQueryNode !== null) {
    nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
  }

  return nodeQuery;
}

export function objectAssignmentFromStepNode(stepNode, context) {
  let objectAssignment = null;

  const objectAssignmentNode = stepNode.getObjectAssignmentNode();

  if (objectAssignmentNode !== null) {
    objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
  }

  return objectAssignment;
}

export function nodesQueryFromExpressionNode(expressionNode, context) {
  let nodesQuery = null;

  const nodesQueryNode = expressionNode.getNodesQueryNode();

  if (nodesQueryNode !== null) {
    nodesQuery = nodesQueryFromNodesQueryNode(nodesQueryNode, context);
  }

  return nodesQuery;
}

export function typeFromNegatedExpressionNode(negatedExpressionNode, context) {
  const type = BOOLEAN_TYPE;

  return type;
}

export function typeFromLogcialExpressionNode(logicalExpressionNode, context) {
  const type = BOOLEAN_TYPE;

  return type;
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

export function initialExpressionFromReduceNode(reduceNode, context) {
  const expression = expressionFromReduceNode(reduceNode, context),
        initialExpression = expression; ///

  return initialExpression;
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

export function negatedExpressionFromExpressionNode(expressionNode, context) {
  let negatedExpression = null;

  const negatedExpressionNode = expressionNode.getNegatedExpressionNode();

  if (negatedExpressionNode !== null) {
    negatedExpression = negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context);
  }

  return negatedExpression;
}

export function logicalExpressionFromExpressionNode(expressionNode, context) {
  let logicalExpression = null;

  const logicalExpressionNode = expressionNode.getLogicalExpressionNode();

  if (logicalExpressionNode !== null) {
    logicalExpression = logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context);
  }

  return logicalExpression;
}

export function disjunctionFromLogicalExpressionNode(logicalExpressionNode, context) {
  const disjunction = logicalExpressionNode.isDisjunction();

  return disjunction;
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

export function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
  const { LogicalExpression } = elements,
        leftExpressionNode = logicalExpressionNode.getLeftExpressionNode(),
        rightExpressionNode = logicalExpressionNode.getRightExpressionNode(),
        type = typeFromLogcialExpressionNode(logicalExpressionNode, context),
        disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context),
        leftExpression = expressionFromExpressionNode(leftExpressionNode, context),
        rightExpression = expressionFromExpressionNode(rightExpressionNode, context),
        string = logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression(disjunction, leftExpression, rightExpression, context),
        logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);

  return logicalExpression;
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

