"use strict";

import { Query } from "occam-query";

import elements from "../elements";

import { BOOLEAN_TYPE } from "../types";
import { variableStringFromName,
         expressionStringFromNode,
         expressionStringFromNodes,
         expressionStringFromBoolean,
         parameterStringFromTypeAndName,
         returnBlockStringFromExpression,
         expressionStringFromStringLiteral,
         paramtersStringFromParametersArray,
         expressionsStringFromExpressionsArray,
         negatedExpressionStringFromExpression,
         procedureDeclarationStringFromProcedure,
         bracketedExpressionStringFromBExpression,
         returnBlockStringFromReturnStatementNode,
         namedParameterStringFromTypeNameAndAsName,
         someStringFromVariableAndAnonymousProcedure,
         namedParametersStringFromNamedParamtersArray,
         everyStringFromVariableAndAnonymousProcedure,
         arrayAssignmentStringFromVariableAndParameters,
         procedureCallStringFromReferenceAndExpressions,
         variableAssignmentStringFromExpressionAndVariable,
         objectAssignmentStringFromVariableAndNamedParameters,
         procedureStringFromTypeLabelParametersAndReturnBlock,
         varaibleAssignmentsStringFromVariableAssignmentsArray,
         anonymousProcedureStringFromTypeParametersAndReturnBlock,
         ternaryStringFromExpressionIfExpressionAndElseExpression,
         comparisonStringFromNegatedLeftExpressionAndRightExpression,
         reduceStringFromVariableInitialExpressionAndAnonymousProcedure,
         expressionStringFromNodeNodesNumberBooleanStringLiteralAndProperties,
         logicalExpressionStringFromTypeDisjunctionLeftExpressionAndRightExpression } from "../utilities/string";

export function stepFromStepNode(stepNode, context) {
  const { Step } = elements,
        node = stepNode,  ///
        string = context.nodeAsString(node),
        arrayAssignment = arrayAssignmentFromStepNode(stepNode, context),
        objectAssigment = objectAssignmentFromStepNode(stepNode, context),
        variablesDeclaration = variableAssignmentsFromStepNode(stepNode, context),
        step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);

  return step;
}

export function someFromSomeNode(someNode, context) {
  const { Some } = elements,
        variable = variableFromSomeNode(someNode, context),
        anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context),
        someString = someStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure),
        string = someString,  ///
        some = new Some(string, variable, anonymousProcedure);

  return some;
}

export function errorFromErrorNode(errorNode, context) {
  const { Error } = elements,
        node = errorNode, ///
        string = context.nodeAsString(node),
        error = new Error(string);

  return error;
}

export function everyFromEveryNode(everyNode, context) {
  const { Every } = elements,
        variable = variableFromEveryNode(everyNode, context),
        anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context),
        everyString = everyStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure),
        string = everyString, ///
        every = new Every(string, variable, anonymousProcedure);

  return every;
}

export function labelFromLabelNode(labelNode, context) {
  const { Label } = elements,
        node = labelNode,
        string = context.nodeAsString(node),
        name = nameFromLabelNode(labelNode, context),
        label = new Label(string, name);

  return label;
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
        expression = expressionFromTernaryNode(ternaryNode, context),
        ifExpression = ifExpressionFromTernaryNode(ternaryNode, context),
        elseExpression = elseExpressionFromTernaryNode(ternaryNode, context),
        ternaryString = ternaryStringFromExpressionIfExpressionAndElseExpression(expression, ifExpression, elseExpression),
        string = ternaryString, ///
        ternary = new Ternary(string, expression, ifExpression, elseExpression);

  return ternary;
}

export function variableFromVariableNode(variableNode, context) {
  const { Variable } = elements,
        type = typeFromVariableNode(variableNode, context),
        name = nameFromVariableNode(variableNode, context),
        expression = expressionfFromVariableNode(variableNode, context),
        variableString = variableStringFromName(name),
        string = variableString,  ///
        variable = new Variable(string, type, name, expression);

  return variable;
}

export function referenceFromReferenceNode(referenceNode, context) {
  const { Reference } = elements,
        node = referenceNode, ///
        string = context.nodeAsString(node),
        name = nameFromReferenceNode(referenceNode, context),
        reference = new Reference(string, name);

  return reference;
}

export function parameterFromParameterNode(parameterNode, context) {
  let parameter = null;

  const type = typeFromParaneterNode(parameterNode, context);

  if (type !== null) {
    const { Parameter } = elements,
          name = nameFromParaneterNode(parameterNode, context),
          parameterString = parameterStringFromTypeAndName(type, name),
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

export function comparisonFromComparisonNode(comparisonNode, context) {
  const { Comparison } = elements,
        leftExpressionNode = comparisonNode.getLeftExpressionNode(),
        rightExpressionNode = comparisonNode.getRightExpressionNode(),
        negated = comparisonNode.isNegated(),
        leftExpression = expressionFromExpressionNode(leftExpressionNode, context),
        rightExpression = expressionFromExpressionNode(rightExpressionNode, context),
        comparisonString = comparisonStringFromNegatedLeftExpressionAndRightExpression(negated, leftExpression, rightExpression),
        string = comparisonString,  ///
        comparison = new Comparison(string, negated, leftExpression, rightExpression);

  return comparison;
}

export function parametersFromParametersNode(parametersNode, context) {
  const { Parameters } = elements,
        paramtersArray = paramtersArrayFromParametersNode(parametersNode, context),
        parametersString = paramtersStringFromParametersArray(paramtersArray),
        string = parametersString,  ///
        array = paramtersArray, ///
        parameters = new Parameters(string, array);

  return parameters;
}

export function expressionFromExpressionNode(expressionNode, context) {
  const { Expression } = elements,
        node = nodeFromExpressionNode(expressionNode, context),
        nodes = nodesFromExpressionNode(expressionNode, context),
        number = numberFromExpressionNode(expressionNode, context),
        boolean = booleanFromExpressionNode(expressionNode, context),
        stringLiteral = stringLiteralFromExpressionNode(expressionNode, context),
        some = someFromExpressionNode(expressionNode, context),
        every = everyFromExpressionNode(expressionNode, context),
        reduce = reduceFromExpressionNode(expressionNode, context),
        ternary = ternaryFromExpressionNode(expressionNode, context),
        variable = variableFromExpressionNode(expressionNode, context),
        nodeQuery = nodeQueryFromExpressionNode(expressionNode, context),
        nodesQuery = nodesQueryFromExpressionNode(expressionNode, context),
        comparison = comparisonFromExpressionNode(expressionNode, context),
        returnBlock = returnBlockFromExpressionNode(expressionNode, context),
        procedureCall = procedureCallFromExpressionNode(expressionNode, context),
        negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context),
        logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context),
        bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context),
        expressionString = expressionStringFromNodeNodesNumberBooleanStringLiteralAndProperties(node, nodes, number, boolean, stringLiteral,[ some,
                                                                                                                                              every,
                                                                                                                                              reduce,
                                                                                                                                              ternary,
                                                                                                                                              variable,
                                                                                                                                              nodeQuery,
                                                                                                                                              nodesQuery,
                                                                                                                                              comparison,
                                                                                                                                              returnBlock,
                                                                                                                                              procedureCall,
                                                                                                                                              negatedExpression,
                                                                                                                                              logicalExpression,
                                                                                                                                              bracketedExpression ], context),
        string = expressionString,  ///
        expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function expressionsFromExpressionsNode(expressionsNode, context) {
  const { Expressions } = elements,
        expressionNodes = expressionsNode.getExpressionNodes(),
        expressionsArray = expressionsArrayFromExpressionNodes(expressionNodes, context),
        expressionsString = expressionsStringFromExpressionsArray(expressionsArray),
        string = expressionsString, ///
        array = expressionsArray,
        expressions = new Expressions(string, array);

  return expressions;
}

export function returnBlockFromReturnBlockNode(returnBlockNode, context) {
  const { ReturnBlock } = elements,
        steps = stepsFromReturnBlockNode(returnBlockNode, context),
        nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context),
        returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context),
        returnBlockString = returnBlockStringFromReturnStatementNode(returnStatement),
        string = returnBlockString, ///
        returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);

  return returnBlock;
}

export function expressionsFromProcedureCallNode(procedureCallNode, context) {
  const expressionsNode = procedureCallNode.getExpressionsNode(),
        expressions = expressionsFromExpressionsNode(expressionsNode);

  return expressions;
}

export function procedureCallFromProcedureCallNode(procedureCallNode, context) {
  const { ProcedureCall } = elements,
        reference = referenceFromProcedureCallNode(procedureCallNode, context),
        expressions = expressionsFromProcedureCallNode(procedureCallNode, context),
        procedureCallString = procedureCallStringFromReferenceAndExpressions(reference, expressions),
        string = procedureCallString,  ///
        procedureCall = new ProcedureCall(string, reference, expressions);

  return procedureCall;
}

export function namedParameterFromNamedParameterNode(namedParameterNode, context) {
  const { NamedParameter } = elements,
        type = typeFromNamedParameterNode(namedParameterNode, context),
        name = nameFromNamedParameterNode(namedParameterNode, context),
        asName = asNameFromNamedParameterNode(namedParameterNode, context),
        namedParamterString = namedParameterStringFromTypeNameAndAsName(type, name, asName),
        string = namedParamterString, ///
        namedParameter = new NamedParameter(string, type, name, asName);

  return namedParameter;
}

export function namedParametersFromNamedParametersNode(namedParametersNode, context) {
  const { NamedParameters } = elements,
        namedParameterNodes = namedParametersNode.getNamedParameterNodes(),
        namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context),
        namedParametersString = namedParametersStringFromNamedParamtersArray(namedParametersArray),
        string = namedParametersString, ///
        array = namedParametersArray, ///
        namedParameters = new NamedParameters(string, array);

  return namedParameters;
}

export function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const { ArrayAssignment } = elements,
        variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context),
        parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context),
        arrayAssignmentString = arrayAssignmentStringFromVariableAndParameters(variable, parameters),
        string = arrayAssignmentString, ///
        arrayAssignment = new ArrayAssignment(string, variable, parameters);

  return arrayAssignment;
}

export function returnStatementFromReturnStatementNode(returnStatementNode, context) {
  const { ReturnStatement } = elements,
        expression = expressionFromReturnStatementNode(returnStatementNode, context),
        returnBlockString = returnBlockStringFromExpression(expression),
        string = returnBlockString,  ///
        returnStatement = new ReturnStatement(string, expression);

  return returnStatement;
}

export function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
  const namedParametersNode = objectAssignmentNode.getNamedParametersNode(),
        namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);

  return namedParameters;
}

export function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
  const { ObjectAssigment } = elements,
        variable = variableFromObjectAssignmentNode(objectAssignmentNode, context),
        namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context),
        objectAssignmentString = objectAssignmentStringFromVariableAndNamedParameters(variable, namedParameters),
        string = objectAssignmentString,  ///
        objectAssignment = new ObjectAssigment(string, variable, namedParameters);

  return objectAssignment;
}

export function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
  const { NegatedExpression } = elements,
        expressionNode = negatedExpressionNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context),
        type = typeFromNegatedExpressionNode(expressionNode, context),
        negatedExpressionString = negatedExpressionStringFromExpression(expression),
        string = negatedExpressionString, ///
        negatedExpression = new NegatedExpression(string, type, expression);

  return negatedExpression;
}

export function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const { AnonymousProcedure } = elements,
        type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context),
        parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context),
        returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context),
        nonymousProcedureString = anonymousProcedureStringFromTypeParametersAndReturnBlock(type, parameters, returnBlock),
        string = nonymousProcedureString, ///
        anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);

  return anonymousProcedure;
}

export function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
  const { BracketedExpression } = elements,
        expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context),
        bracketedExpressionString = bracketedExpressionStringFromBExpression(expression),
        string = bracketedExpressionString, ///
        bracketedExpression = new BracketedExpression(string, expression);

  return bracketedExpression;
}

export function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
  const { VariableAssignments } = elements,
        variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context),
        variableAssignmentsString = varaibleAssignmentsStringFromVariableAssignmentsArray(variableAssignmentsArray),
        string = variableAssignmentsString, ///
        array = variableAssignmentsArray, ///
        variableAssignments = new VariableAssignments(string, array);

  return variableAssignments;
}

export function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { ProcedureDeclaration } = elements,
        procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context),
        procedureDeclarationString = procedureDeclarationStringFromProcedure(procedure),
        string = procedureDeclarationString,  ///
        procedureDeclaration = new ProcedureDeclaration(string, procedure);

  return procedureDeclaration;
}

export function nameFromLabelNode(labelNode, context) {
  const name = labelNode.getName();

  return name;
}

export function expressionFromNode(node, context) {
  const { Expression } = elements,
        expressionString = expressionStringFromNode(node, context),
        string = expressionString,  ///
        nodes = null,
        number = null,
        boolean = null,
        stringLiteral = null,
        some = null,
        every = null,
        reduce = null,
        ternary = null,
        variable = null,
        nodeQuery = null,
        nodesQuery = null,
        comparison = null,
        returnBlock = null,
        procedureCall = null,
        negatedExpression = null,
        logicalExpression = null,
        bracketedExpression = null,
        expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function expressionFromNodes(nodes, context) {
  const { Expression } = elements,
        expressionString = expressionStringFromNodes(nodes, context),
        string = expressionString,  ///
        node = null,
        number = null,
        boolean = null,
        ternary = null,
        stringLiteral = null,
        some = null,
        every = null,
        reduce = null,
        variable = null,
        nodeQuery = null,
        nodesQuery = null,
        comparison = null,
        returnBlock = null,
        procedureCall = null,
        negatedExpression = null,
        logicalExpression = null,
        bracketedExpression = null,
        expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function expressionsFromNodes(nodes, context) {
  const { Expressions } = elements,
        expressionsArray = expressionsArrayFromNodes(nodes, context),
        expressionsString = expressionsStringFromExpressionsArray(expressionsArray),
        string = expressionsString, ///
        array = expressionsArray, ///
        expressions = new Expressions(string, array);

  return expressions;
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

export function expressionFromBoolean(boolean, context) {
  const { Expression } = elements,
        expressionString = expressionStringFromBoolean(boolean),
        node = null,
        nodes = null,
        number = null,
        stringLiteral = null,
        some = null,
        every = null,
        reduce = null,
        ternary = null,
        variable = null,
        nodeQuery = null,
        nodesQuery = null,
        comparison = null,
        returnBlock = null,
        procedureCall = null,
        negatedExpression = null,
        logicalExpression = null,
        bracketedExpression = null,
        string = expressionString,  ///
        expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function variableFromParameter(parameter, context) {
  const { Variable } = elements,
        type = parameter.getType(),
        name = parameter.getName(),
        expression = null,
        variableString = variableStringFromName(name),
        string = variableString,  ///
        variable = new Variable(string, type, name, expression);

  return variable;
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

export function nameFromReferenceNode(referenceNode, context) {
  const name = referenceNode.getName();

  return name;
}

export function variableFromReduceNode(reduceNode, context) {
  const variableNode = reduceNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
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

export function queryFromNodeQueryNode(nodeQueryNode, context) {
  const string = nodeQueryNode.getString(),
        expressionString = string,  ///
        query = Query.fromExpressionString(expressionString);

  return query;
}

export function queryFromNodesQueryNode(nodesQueryNode, context) {
  const string = nodesQueryNode.getString(),
        expressionString = string,  ///
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

export function expressionsFromExpression(expression, context) {
  const { Expressions } = elements,
        expressionsArray = [
          expression
        ],
        expressionsString = expressionsStringFromExpressionsArray(expressionsArray),
        string = expressionsString, ///
        array = expressionsArray, ///
        expressions = new Expressions(string, array);

  return expressions;
}

export function expressionFromTernaryNode(ternaryNode, context) {
  const expressionNode = ternaryNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context);

  return expression;
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

export function typeFromNamedParameterNode(namedParameterNode, context) {
  const type = namedParameterNode.getType();

  return type;
}

export function nameFromNamedParameterNode(namedParameterNode, context) {
  const name = namedParameterNode.getName();

  return name;
}

export function variableFromNamedParameter(namedParameter, context) {
  const { Variable } = elements,
        asName = namedParameter.getAsName(),
        type = namedParameter.getType(),
        name = (asName !== null) ?
                 asName : ///
                   namedParameter.getName(),
        expression = null,
        variableString = variableStringFromName(name),
        string = variableString,  ///
        variable = new Variable(string, type, name, expression);

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

export function ifExpressionFromTernaryNode(ternaryNode, context) {
  const ifExpressionNode = ternaryNode.getIfExpressionNode(),
        ifExpression = expressionFromExpressionNode(ifExpressionNode, context);

  return ifExpression;
}

export function nodeQueryFromExpressionNode(expressionNode, context) {
  let nodeQuery = null;

  const nodeQueryNode = expressionNode.getNodeQueryNode();

  if (nodeQueryNode !== null) {
    nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
  }

  return nodeQuery;
}

export function expressionFromStringLiteral(stringLiteral, context) {
  const { Expression } = elements,
        expressionString = expressionStringFromStringLiteral(stringLiteral),
        string = expressionString,  ///
        node = null,
        nodes = null,
        number = null,
        boolean = null,
        some = null,
        every = null,
        reduce = null,
        ternary = null,
        variable = null,
        nodeQuery = null,
        nodesQuery = null,
        comparison = null,
        returnBlock = null,
        procedureCall = null,
        negatedExpression = null,
        logicalExpression = null,
        bracketedExpression = null,
        expression = new Expression(string, node, nodes, number, boolean, stringLiteral, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
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

export function comparisonFromExpressionNode(expressionNOde, context) {
  let comparison = null;

  const comparisonNode = expressionNOde.getComparisonNode();

  if (comparisonNode !== null) {
    comparison = comparisonFromComparisonNode(comparisonNode, context);
  }

  return comparison;
}

export function asNameFromNamedParameterNode(namedParameterNode, context) {
  const asName = namedParameterNode.getAsName();

  return asName;
}

export function elseExpressionFromTernaryNode(ternaryNode, context) {
  const elseExpressionNode = ternaryNode.getElseExpressionNode(),
        elseExpression = expressionFromExpressionNode(elseExpressionNode, context);

  return elseExpression;
}

export function returnBlockFromExpressionNode(expressionNode, context) {
  let returnBlock = null;

  const returnBlockNode = expressionNode.getReturnBlockNode();

  if (returnBlockNode !== null) {
    returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
  }

  return returnBlock;
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

export function referenceFromProcedureCallNode(procedureCallNode, context) {
  const referenceNode = procedureCallNode.getReferenceNode(),
        reference = referenceFromReferenceNode(referenceNode, context);

  return reference;
}

export function variableFromTypeAndVariableNode(type, variableNode, context) {
  const { Variable } = elements,
        name = nameFromVariableNode(variableNode),
        expression = expressionfFromVariableNode(variableNode, context),
        variableString = variableStringFromName(name),
        string = variableString,  ///
        variable = new Variable(string, type, name, expression);

  return variable;
}

export function variableAssignmentsFromStepNode(stepNode, context) {
  let variableAssignments = null;

  const variableAssignmentsNode = stepNode.getVariableAssignmentsNode();

  if (variableAssignmentsNode !== null) {
    variableAssignments = variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context);
  }

  return variableAssignments;
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

export function stringLiteralFromExpressionNode(expressionNode, context) {
  const stringLiteral = expressionNode.getStringLiteral();

  return stringLiteral;
}

export function procedureCallFromExpressionNode(expressionNode, context) {
  let procedureCall = null;

  const procedureCallNode = expressionNode.getProcedureCallNode();

  if (procedureCallNode !== null) {
    procedureCall = procedureCallFromProcedureCallNode(procedureCallNode, context);
  }

  return procedureCall;
}

export function variableFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const variableNode = arrayAssignmentNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function anonymousProcedureFromReduceNode(reduceNode, context) {
  const anonymousProcedureNode = reduceNode.getAnonymousProcedureNode(),
        anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

  return anonymousProcedure;
}

export function variableFromObjectAssignmentNode(objectAssignmentNode, context) {
  const variableNode = objectAssignmentNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function typeFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const type = procedureDeclarationNode.getType();

  return type;
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

export function labelFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const labelNode = procedureDeclarationNode.getLabelNode(),
        label = labelFromLabelNode(labelNode, context);

  return label;
}

export function returnStatementFromReturnBlockNode(returnBlockNode, context) {
  const returnStatementNode = returnBlockNode.getReturnStatementNode(),
        returnStatement = returnStatementFromReturnStatementNode(returnStatementNode, context);

  return returnStatement;
}

export function variableFromExpressionAndParameter(expression, parameter, context) {
  const { Variable } = elements,
        type = parameter.getType(),
        name = parameter.getName(),
        variableString = variableStringFromName(name),
        string = variableString,  ///
        variable = new Variable(string, type, name, expression);

  return variable;
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

export function expressionFromVariableAssignmentNode(variableAssigmentNode, context) {
  const expressionNode = variableAssigmentNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context);

  return expression;
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

export function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Procedure } = elements,
        type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context),
        label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context),
        parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context),
        returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context),
        procedureString = procedureStringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock),
        string = procedureString, ///
        procedure = new Procedure(string, type, label, parameters, returnBlock);

  return procedure;
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

export function returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const returnBlockNode = procedureDeclarationNode.getReturnBlockNode(),
        returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

  return returnBlock;
}

export function variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const variableNode = variableAssignmentNode.getVariableNode(),
        variable = variableFromTypeAndVariableNode(type, variableNode, context);

  return variable;
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

export function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const { VariableAssignment } = elements,
        variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context),
        expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context),
        variableAssignmentString = variableAssignmentStringFromExpressionAndVariable(expression, variable, context),
        string = variableAssignmentString,  ///
        assignment = new VariableAssignment(string, variable, expression);

  return assignment;
}

export function expressionsArrayFromNodes(nodes, context) {
  const expressionsArray = nodes.map((node) => { ///
    const expression = expressionFromNode(node, context);

    return expression;
  });

  return expressionsArray;
}

export function paramtersArrayFromParametersNode(parametersNode, context) {
  const parameterNodes = parametersNode.getParameterNodes(),
        paramtersArray = parameterNodes.map((parameterNode) => { ///
          const parameter = parameterFromParameterNode(parameterNode, context);

          return parameter;
        });

  return paramtersArray;
}

export function expressionsArrayFromExpressionNodes(expressionNodes, context) {
  const expressionsArray = expressionNodes.map((expressionNode) => { ///
          const expression = expressionFromExpressionNode(expressionNode, context);

          return expression;
        });

  return expressionsArray;
}

export function namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context) {
  const namedParamtersArray = namedParameterNodes.map((namedParameterNode) => { ///
    const namedParameter = namedParameterFromNamedParameterNode(namedParameterNode, context);

    return namedParameter;
  });

  return namedParamtersArray;
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

export default {
  expressionsFromNodes
};
