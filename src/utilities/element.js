"use strict";

import { Query } from "occam-query";

import elements from "../elements";

import { BOOLEAN_TYPE } from "../types";
import { ternaryStringFromTerm,
         variableStringFromName,
         termStringFromPrimitiveAndProperties,
         procedureDeclarationStringFromProcedure,
         returnBlockStringFromReturnStatementNode,
         expressionStringFromPrimitiveAndProperties,
         variableAssignmentStringFromTypeAndVariable,
         someStringFromVariableAndAnonymousProcedure,
         everyStringFromVariableAndAnonymousProcedure,
         procedureStringFromTypeLabelParametersAndReturnBlock,
         variableAssignmentStringFromVariableAssignmentsArray,
         anonymousProcedureStringFromTypeParametersAndReturnBlock,
         reduceStringFromVariableInitialExpressionAndAnonymousProcedure } from "../utilities/string";

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

export function termFromTermNode(termNode, context) {
  const { Term } = elements,
        variable = variableFromTermNode(termNode, context),
        primitive = primitiveFromTermNode(termNode, context),
        negatedTerm = negatedTermFromTermNode(termNode, context),
        logicalTerm = logicalTermFromTermNode(termNode, context),
        bracketedTerm = bracketedTermFromTermNode(termNode, context),
        comparisonTerm = comparisonTermFromTermNode(termNode, context),
        properties = [
          variable,
          negatedTerm,
          logicalTerm,
          bracketedTerm,
          comparisonTerm
        ],
        termString = termStringFromPrimitiveAndProperties(primitive, properties, context),
        string = termString,  ///
        term = new Term(string, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);

  return term;
}

export function termsFromTermsNode(termsNode, context) {
  const { Terms } = elements,
        node = termsNode, ///
        string = context.nodeAsString(node),
        termNodes = termsNode.getTermNodes(),
        termsArray = termsArrayFromTermNodes(termNodes, context),
        array = termsArray, ///
        terms = new Terms(string, array);

  return terms;
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
        term = termFromTernaryNode(ternaryNode, context),
        ifExpression = ifExpressionFromTernaryNode(ternaryNode, context),
        elseExpression = elseExpressionFromTernaryNode(ternaryNode, context),
        ternaryString = ternaryStringFromTerm(term),
        string = ternaryString, ///
        ternary = new Ternary(string, term, ifExpression, elseExpression);

  return ternary;
}

export function variableFromVariableNode(variableNode, context) {
  const { Variable } = elements,
        node = variableNode,  ///
        string = context.nodeAsString(node),
        type = typeFromVariableNode(variableNode, context),
        name = nameFromVariableNode(variableNode, context),
        expression = expressionFromVariableNode(variableNode, context),
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
          node = parameterNode, ///
          string = context.nodeAsString(node),
          name = nameFromParaneterNode(parameterNode, context);

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

export function primitiveFromPrimitiveNode(primitiveNode, context) {
  const { Primitive } = elements,
        primitiveString = context.nodeAsString(primitiveNode),
        string = primitiveString, ///
        node = nodeFromPrimitiveNode(primitiveNode, context),
        nodes = nodesFromPrimitiveNode(primitiveNode, context),
        number = numberFromPrimitiveNode(primitiveNode, context),
        boolean = booleanFromPrimitiveNode(primitiveNode, context),
        stringLiteral = stringLiteralFromPrimitiveNode(primitiveNode, context),
        primitive = new Primitive(string, node, nodes, number, boolean, stringLiteral);

  return primitive;
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
        node = parametersNode,  ///
        string = context.nodeAsString(node),
        paramtersArray = paramtersArrayFromParametersNode(parametersNode, context),
        array = paramtersArray, ///
        parameters = new Parameters(string, array);

  return parameters;
}

export function expressionFromExpressionNode(expressionNode, context) {
  const { Expression } = elements,
        variable = variableFromExpressionNode(expressionNode, context),
        primitive = primitiveFromExpressionNode(expressionNode, context),
        some = someFromExpressionNode(expressionNode, context),
        every = everyFromExpressionNode(expressionNode, context),
        reduce = reduceFromExpressionNode(expressionNode, context),
        ternary = ternaryFromExpressionNode(expressionNode, context),
        nodeQuery = nodeQueryFromExpressionNode(expressionNode, context),
        nodesQuery = nodesQueryFromExpressionNode(expressionNode, context),
        returnBlock = returnBlockFromExpressionNode(expressionNode, context),
        procedureCall = procedureCallFromExpressionNode(expressionNode, context),
        negatedExpression = negatedExpressionFromExpressionNode(expressionNode, context),
        logicalExpression = logicalExpressionFromExpressionNode(expressionNode, context),
        bracketedExpression = bracketedExpressionFromExpressionNode(expressionNode, context),
        comparisonExpression = comparisonExpressionFromExpressionNode(expressionNode, context),
        properties = [
          some,
          every,
          reduce,
          ternary,
          variable,
          nodeQuery,
          nodesQuery,
          returnBlock,
          procedureCall,
          negatedExpression,
          logicalExpression,
          bracketedExpression,
          comparisonExpression
        ],
        expressionString = expressionStringFromPrimitiveAndProperties(primitive, properties, context),
        string = expressionString,  ///
        expression = new Expression(string, variable, primitive, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression, comparisonExpression);

  return expression;
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

export function procedureCallFromProcedureCallNode(procedureCallNode, context) {
  const { ProcedureCall } = elements,
        node = procedureCallNode, ///
        string = context.nodeAsString(node),
        reference = referenceFromProcedureCallNode(procedureCallNode, context),
        expressions = termsFromProcedureCallNode(procedureCallNode, context),
        procedureCall = new ProcedureCall(string, reference, expressions);

  return procedureCall;
}

export function namedParameterFromNamedParameterNode(namedParameterNode, context) {
  const { NamedParameter } = elements,
        node = namedParameterNode,  ///
        string = context.nodeAsString(node),
        type = typeFromNamedParameterNode(namedParameterNode, context),
        name = nameFromNamedParameterNode(namedParameterNode, context),
        alias = aliasFromNamedParameterNode(namedParameterNode, context),
        namedParameter = new NamedParameter(string, type, name, alias);

  return namedParameter;
}

export function namedParametersFromNamedParametersNode(namedParametersNode, context) {
  const { NamedParameters } = elements,
        node = namedParametersNode, ///
        string = context.nodeAsString(node),
        namedParameterNodes = namedParametersNode.getNamedParameterNodes(),
        namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context),
        array = namedParametersArray, ///
        namedParameters = new NamedParameters(string, array);

  return namedParameters;
}

export function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const { ArrayAssignment } = elements,
        node = arrayAssignmentNode, ///
        string = context.nodeAsString(node),
        variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context),
        parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context),
        arrayAssignment = new ArrayAssignment(string, variable, parameters);

  return arrayAssignment;
}

export function returnStatementFromReturnStatementNode(returnStatementNode, context) {
  const { ReturnStatement } = elements,
        node = returnStatementNode, ///
        string = context.nodeAsString(node),
        term = termFromReturnStatementNode(returnStatementNode, context),
        returnStatement = new ReturnStatement(string, term);

  return returnStatement;
}

export function namedParametersFromObjectAssignmentNode(objectAssignmentNode, context) {
  const namedParametersNode = objectAssignmentNode.getNamedParametersNode(),
        namedParameters = namedParametersFromNamedParametersNode(namedParametersNode, context);

  return namedParameters;
}

export function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
  const { ObjectAssigment } = elements,
        node = objectAssignmentNode,  ///
        string = context.nodeAsString(node),
        variable = variableFromObjectAssignmentNode(objectAssignmentNode, context),
        namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context),
        objectAssignment = new ObjectAssigment(string, variable, namedParameters);

  return objectAssignment;
}

export function negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context) {
  const { NegatedExpression } = elements,
        node = negatedExpressionNode, ///
        string = context.nodeAsString(node),
        expressionNode = negatedExpressionNode.getExpressionNode(),
        type = typeFromNegatedExpressionNode(expressionNode, context),
        expression = expressionFromNegatedExpressionNode(negatedExpressionNode, context),
        negatedExpression = new NegatedExpression(string, type, expression);

  return negatedExpression;
}

export function logicalExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
  const { LogicalExpression } = elements,
        node = logicalExpressionNode, ///
        string = context.nodeAsString(node),
        type = typeFromLogicalExpressionNode(logicalExpressionNode, context),
        disjunction = disjunctionFromLogicalExpressionNode(logicalExpressionNode, context),
        leftExpression = leftExpressionFromLogicalExpressionNode(logicalExpressionNode, context),
        rightExpression = rightExpressionFromLogicalExpressionNode(logicalExpressionNode, context),
        logicalExpression = new LogicalExpression(string, type, disjunction, leftExpression, rightExpression);

  return logicalExpression;
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

export function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
  const { VariableAssignments } = elements,
        variableAssignmentsArray = variableAssignmentsArrayFromVariableAssignmentsNode(variableAssignmentsNode, context),
        variableAssignmentString = variableAssignmentStringFromVariableAssignmentsArray(variableAssignmentsArray),
        array = variableAssignmentsArray, ///
        string = variableAssignmentString,  ///
        variableAssignments = new VariableAssignments(string, array);

  return variableAssignments;
}

export function bracketedExpressionFromBracketedExpressionNode(bracketedExpressionNode, context) {
  const { BracketedExpression } = elements,
        node = bracketedExpressionNode, ///
        string = context.nodeAsString(node),  ///
        expression = expressionFromBracketedExpressionNode(bracketedExpressionNode, context),
        bracketedExpression = new BracketedExpression(string, expression);

  return bracketedExpression;
}

export function comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context) {
  const { ComparisonExpression } = elements,
        node = comparisonExpressionNode,  ///
        string = context.nodeAsString(node),
        negated = negatedFromComparisonExpressionNode(comparisonExpressionNode, context),
        leftExpression = leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context),
        rightExpression = rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context),
        comparisonExpression = new ComparisonExpression(string, negated, leftExpression, rightExpression);

  return comparisonExpression;
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

export function termFromTernaryNode(ternaryNode, context) {
  const termNode = ternaryNode.getTermNode(),
        term = termFromTermNode(termNode, context);

  return term;
}

export function variableFromSomeNode(someNode, context) {
  const variableNode = someNode.getVariableNode(), ///
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function variableFromTermNode(termNode, context) {
  let variable = null;

  const variableNode = termNode.getVariableNode();

  if (variableNode !== null) {
    variable = variableFromVariableNode(variableNode, context);
  }

  return variable;
}

export function nameFromVariableNode(variableNode) {
  const name = variableNode.getName();

  return name;
}

export function typeFromVariableNode(variableNode, context) {
  const type = null;

  return type;
}

export function primitiveFromTermNode(termNode, context) {
  let primitive = null;

  const primitiveNode = termNode.getPrimitiveNode();

  if (primitiveNode !== null) {
    primitive = primitiveFromPrimitiveNode(primitiveNode, context);
  }

  return primitive;
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

export function nodeFromPrimitiveNode(primitiveNode, context) {
  const node = primitiveNode.getNode();

  return node;
}

export function nodesFromPrimitiveNode(primitiveNode, context) {
  const nodes = null;

  return nodes;
}

export function variableFromReduceNode(reduceNode, context) {
  const variableNode = reduceNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
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

export function numberFromPrimitiveNode(primitiveNode, context) {
  const number = primitiveNode.getNumber();

  return number;
}

export function queryFromNodesQueryNode(nodesQueryNode, context) {
  const string = nodesQueryNode.getString(),
        expressionString = string,  ///
        query = Query.fromExpressionString(expressionString);

  return query;
}

export function everyFromExpressionNode(expressionNode, context) {
  let every = null;

  const everyNode = expressionNode.getEveryNode();

  if (everyNode !== null) {
    every = everyFromEveryNode(everyNode, context);
  }

  return every;
}

export function negatedTermFromTermNode(termNode, context) {
  let negatedTerm = null;

  const negatedTermNode = termNode.getNegatedTermNode();

  if (negatedTermNode !== null) {
    negatedTerm = negatedTermFromNegatedTermNode(negatedTermNode, context);
  }

  return negatedTerm;
}

export function logicalTermFromTermNode(termNode, context) {
  let logicalTerm = null;

  const logicalTermNode = termNode.getLogicalTermNode();

  if (logicalTermNode !== null) {
    logicalTerm = logicalTermFromLogicalTermNode(logicalTermNode, context);
  }

  return logicalTerm;
}

export function typeFromLogicalTermNode(logicalTermNode, context) {
  const type = BOOLEAN_TYPE;

  return type;
}

export function termFromNegatedTermNode(negatedTermNode, context) {
  const termNode = negatedTermNode.getTermNode(),
    term = termFromTermNode(termNode, context);

  return term;
}

export function booleanFromPrimitiveNode(primitiveNode, context) {
  const boolean = primitiveNode.getBoolean();

  return boolean;
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

export function ternaryFromExpressionNode(expressionNode, context) {
  let ternary = null;

  const ternaryNode = expressionNode.getTernaryNode();

  if (ternaryNode !== null) {
    ternary = ternaryFromTernaryNode(ternaryNode, context);
  }

  return ternary;
}

export function bracketedTermFromTermNode(termNode, context) {
  let bracketedTerm = null;

  const bracketedTermNode = termNode.getBracketedTermNode();

  if (bracketedTermNode !== null) {
    bracketedTerm = bracketedTermFromBracketedTermNode(bracketedTermNode, context);
  }

  return bracketedTerm;
}

export function termFromBracketedTermNode(bracketedTermNode, context) {
  const termNode = bracketedTermNode.getTermNode(),
    term = termFromTermNode(termNode, context);

  return term;
}

export function comparisonTermFromTermNode(termNOde, context) {
  let comparisonTerm = null;

  const comparisonTermNode = termNOde.getComparisonTermNode();

  if (comparisonTermNode !== null) {
    comparisonTerm = comparisonTermFromComparisonTermNode(comparisonTermNode, context);
  }

  return comparisonTerm;
}

export function expressionFromVariableNode(variableNode, context) {
  const expression = null;

  return expression;
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

export function termsFromProcedureCallNode(procedureCallNode, context) {
  const termsNode = procedureCallNode.getTermsNode(),
        terms = termsFromTermsNode(termsNode, context);

  return terms;
}

export function typeFromNamedParameterNode(namedParameterNode, context) {
  const type = namedParameterNode.getType();

  return type;
}

export function nameFromNamedParameterNode(namedParameterNode, context) {
  const name = namedParameterNode.getName();

  return name;
}

export function leftTermFromLogicalTermNode(logicalTermNode, context) {
  const leftTermNode = logicalTermNode.getLeftTermNode(),
    leftTerm = termFromTermNode(leftTermNode, context);

  return leftTerm;
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

export function primitiveFromExpressionNode(expressionNode, context) {
  let primitive = null;

  const primitiveNode = expressionNode.getPrimitiveNode();

  if (primitiveNode !== null) {
    primitive = primitiveFromPrimitiveNode(primitiveNode, context);
  }

  return primitive;
}

export function nodeQueryFromExpressionNode(expressionNode, context) {
  let nodeQuery = null;

  const nodeQueryNode = expressionNode.getNodeQueryNode();

  if (nodeQueryNode !== null) {
    nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
  }

  return nodeQuery;
}

export function aliasFromNamedParameterNode(namedParameterNode, context) {
  const alias = namedParameterNode.getAlias();

  return alias;
}

export function termFromReturnStatementNode(returnStatementNode, context) {
  const termNode = returnStatementNode.getTermNode(),
        term = termFromTermNode(termNode, context);

  return term;
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

export function rightTermFromLogicalTermNode(logicalTermNode, context) {
  const rightTermNode = logicalTermNode.getRightTermNode(),
       rightTerm = termFromTermNode(rightTermNode, context);

  return rightTerm;
}

export function negatedFromComparisonTermNode(comparisonTermNode, context) {
  const negated = comparisonTermNode.isNegated();

  return negated;
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

export function typeFromLogicalExpressionNode(logicalExpressionNode, context) {
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

export function stringLiteralFromPrimitiveNode(primitiveNode, context) {
  const stringLiteral = primitiveNode.getStringLiteral();

  return stringLiteral;
}

export function leftTermFromCompzrisonTermNode(comparisonTermNode, context) {
  const leftTermNode = comparisonTermNode.getLeftTermNode(),
        leftTerm = termFromTermNode(leftTermNode, context);

  return leftTerm;
}

export function disjunctionFromLogicalTermNode(logicalTermNode, context) {
  const disjunction = logicalTermNode.isDisjunction();

  return disjunction;
}

export function negatedTermFromNegatedTermNode(negatedTermNode, context) {
  const { NegatedTerm } = elements,
        node = negatedTermNode, ///
        string = context.nodeAsString(node),
        termNode = negatedTermNode.getTermNode(),
        type = typeFromNegatedTermNode(termNode, context),
        term = termFromNegatedTermNode(negatedTermNode, context),
        negatedTerm = new NegatedTerm(string, type, term);

  return negatedTerm;
}

export function logicalTermFromLogicalTermNode(logicalTermNode, context) {
  const { LogicalTerm } = elements,
        node = logicalTermNode, ///
        string = context.nodeAsString(node),
        type = typeFromLogicalTermNode(logicalTermNode, context),
        disjunction = disjunctionFromLogicalTermNode(logicalTermNode, context),
        leftTerm = leftTermFromLogicalTermNode(logicalTermNode, context),
        rightTerm = rightTermFromLogicalTermNode(logicalTermNode, context),
        logicalTerm = new LogicalTerm(string, type, disjunction, leftTerm, rightTerm);

  return logicalTerm;
}

export function variableFromTypeAndVariableNode(type, variableNode, context) {
  const { Variable } = elements,
        name = nameFromVariableNode(variableNode),
        expression = expressionFromTypeAndVariableNode(type, variableNode, context),
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

export function rightTermFromCompzrisonTermNode(comparisonTermNode, context) {
  const rightTermNode = comparisonTermNode.getLeftTermNode(),
        rightTerm = termFromTermNode(rightTermNode, context);

  return rightTerm;
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

export function expressionFromTypeAndVariableNode(type, variableNode, context) {
  const expression = null;

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

export function bracketedTermFromBracketedTermNode(bracketedTermNode, context) {
  const { BracketedTerm } = elements,
        node = bracketedTermNode, ///
        string = context.nodeAsString(node),  ///
        term = termFromBracketedTermNode(bracketedTermNode, context),
        bracketedTerm = new BracketedTerm(string, term);

  return bracketedTerm;
}

export function negatedExpressionFromExpressionNode(expressionNode, context) {
  let negatedExpression = null;

  const negatedExpressionNode = expressionNode.getNegatedExpressionNode();

  if (negatedExpressionNode !== null) {
    negatedExpression = negatedExpressionFromNegatedExpressionNode(negatedExpressionNode, context);
  }

  return negatedExpression;
}

export function expressionFromNegatedExpressionNode(negatedExpressionNode, context) {
  const expressionNode = negatedExpressionNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context);

  return expression;
}

export function negatedFromComparisonExpressionNode(comparisonExpressionNode, context) {
  const negated = comparisonExpressionNode.isNegated();

  return negated;
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

export function comparisonTermFromComparisonTermNode(comparisonTermNode, context) {
  const { ComparisonTerm } = elements,
        node = comparisonTermNode,  ///
        string = context.nodeAsString(node),
        negated = negatedFromComparisonTermNode(comparisonTermNode, context),
        leftTerm = leftTermFromCompzrisonTermNode(comparisonTermNode, context),
        rightTerm = rightTermFromCompzrisonTermNode(comparisonTermNode, context),
        comparisonTerm = new ComparisonTerm(string, negated, leftTerm, rightTerm);

  return comparisonTerm;
}

export function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const returnBlockNode = anonymousProcedureNode.getReturnBlockNode(),
        returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

  return returnBlock;
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

export function comparisonExpressionFromExpressionNode(expressionNOde, context) {
  let comparisonExpression = null;

  const comparisonExpressionNode = expressionNOde.getComparisonExpressionNode();

  if (comparisonExpressionNode !== null) {
    comparisonExpression = comparisonExpressionFromComparisonExpressionNode(comparisonExpressionNode, context);
  }

  return comparisonExpression;
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

export function leftExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
  const leftExpressionNode = logicalExpressionNode.getLeftExpressionNode(),
        leftExpression = expressionFromExpressionNode(leftExpressionNode, context);

  return leftExpression;
}

export function rightExpressionFromLogicalExpressionNode(logicalExpressionNode, context) {
  const rightExpressionNode = logicalExpressionNode.getRightExpressionNode(),
        rightExpression = expressionFromExpressionNode(rightExpressionNode, context);

  return rightExpression;
}

export function variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const variableNode = variableAssignmentNode.getVariableNode(),
        variable = variableFromTypeAndVariableNode(type, variableNode, context);

  return variable;
}

export function leftExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
  const leftExpressionNode = comparisonExpressionNode.getLeftExpressionNode(),
        leftExpression = expressionFromExpressionNode(leftExpressionNode, context);

  return leftExpression;
}

export function rightExpressionFromCompzrisonExpressionNode(comparisonExpressionNode, context) {
  const rightExpressionNode = comparisonExpressionNode.getLeftExpressionNode(),
        rightExpression = expressionFromExpressionNode(rightExpressionNode, context);

  return rightExpression;
}

export function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const { VariableAssignment } = elements,
        variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context),
        expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context),
        variableAssignmentString = variableAssignmentStringFromTypeAndVariable(type, variable, context),
        string = variableAssignmentString,  ///
        assignment = new VariableAssignment(string, variable, expression);

  return assignment;
}

export function termsArrayFromTermNodes(termNodes, context) {
  const termsArray = termNodes.map((termNode) => { ///
    const term = termFromTermNode(termNode, context);

    return term;
  });

  return termsArray;
}

export function paramtersArrayFromParametersNode(parametersNode, context) {
  const parameterNodes = parametersNode.getParameterNodes(),
        paramtersArray = parameterNodes.map((parameterNode) => { ///
          const parameter = parameterFromParameterNode(parameterNode, context);

          return parameter;
        });

  return paramtersArray;
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
