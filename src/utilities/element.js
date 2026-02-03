"use strict";

import { Query } from "occam-query";

import elements from "../elements";

import { BOOLEAN_TYPE } from "../types";
import { ternaryStringFromTerm,
         variableStringFromName,
         termStringFromProperties,
         expressionStringFromProperties,
         procedureDeclarationStringFromProcedure,
         returnBlockStringFromReturnStatementNode,
         variableAssignmentStringFromTypeAndVariable,
         someStringFromVariableAndAnonymousProcedure,
         everyStringFromVariableAndAnonymousProcedure,
         procedureStringFromTypeLabelParametersAndReturnBlock,
         anonymousProcedureStringFromTypeParametersAndReturnBlock,
         variableAssignmentStringFromTypeAndVariableAssignmentsArray,
         reduceStringFromVariableInitialExpressionAndAnonymousProcedure } from "../utilities/string";

export function stepFromStepNode(stepNode, context) {
  const { Step } = elements,
        node = stepNode,  ///
        string = context.nodeAsString(node),
        arrayAssignment = arrayAssignmentFromStepNode(stepNode, context),
        objectAssigment = objectAssignmentFromStepNode(stepNode, context),
        variablesDeclaration = variableAssignmentsFromStepNode(stepNode, context);

  context = null;

  const step = new Step(context, string, node, arrayAssignment, objectAssigment, variablesDeclaration);

  return step;
}

export function someFromSomeNode(someNode, context) {
  const { Some } = elements,
        node = someNode,  ///
        variable = variableFromSomeNode(someNode, context),
        anonymousProcedure = anonymousProcedureFromSomeNode(someNode, context),
        someString = someStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure),
        string = someString;  ///

  context = null;

  const some = new Some(context, string, node, variable, anonymousProcedure);

  return some;
}

export function termFromTermNode(termNode, context) {
  const { Term } = elements,
        node = termNode,  ///
        variable = variableFromTermNode(termNode, context),
        primitive = primitiveFromTermNode(termNode, context),
        negatedTerm = negatedTermFromTermNode(termNode, context),
        logicalTerm = logicalTermFromTermNode(termNode, context),
        bracketedTerm = bracketedTermFromTermNode(termNode, context),
        comparisonTerm = comparisonTermFromTermNode(termNode, context),
        properties = [
          variable,
          primitive,
          negatedTerm,
          logicalTerm,
          bracketedTerm,
          comparisonTerm
        ],
        termString = termStringFromProperties(properties, context),
        string = termString;  ///

  context = null;

  const term = new Term(context, string, node, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);

  return term;
}

export function termsFromTermsNode(termsNode, context) {
  const { Terms } = elements,
        node = termsNode, ///
        string = context.nodeAsString(node),
        termNodes = termsNode.getTermNodes(),
        termsArray = termsArrayFromTermNodes(termNodes, context),
        array = termsArray; ///

  context = null;

  const terms = new Terms(context, string, node, array);

  return terms;
}

export function errorFromErrorNode(errorNode, context) {
  const { Error } = elements,
        node = errorNode, ///
        string = context.nodeAsString(node);

  context = null;

  const error = new Error(context, string, node);

  return error;
}

export function everyFromEveryNode(everyNode, context) {
  const { Every } = elements,
        node = everyNode, ///
        variable = variableFromEveryNode(everyNode, context),
        anonymousProcedure = anonymousProcedureFromEveryNode(everyNode, context),
        everyString = everyStringFromVariableAndAnonymousProcedure(variable, anonymousProcedure),
        string = everyString; ///

  context = null;

  const every = new Every(context, string, node, variable, anonymousProcedure);

  return every;
}

export function labelFromLabelNode(labelNode, context) {
  const { Label } = elements,
        node = labelNode,
        string = context.nodeAsString(node),
        name = nameFromLabelNode(labelNode, context);

  context = null;

  const label = new Label(context, string, node, name);

  return label;
}

export function reduceFromReduceNode(reduceNode, context) {
  const { Reduce } = elements,
        node = reduceNode,  ///
        variable = variableFromReduceNode(reduceNode, context),
        initialExpression = initialExpressionFromReduceNode(reduceNode, context),
        anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context),
        reduceString = reduceStringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure),
        string = reduceString;  ///

  context = null;

  const reduce = new Reduce(context, string, node, variable, initialExpression, anonymousProcedure);

  return reduce;
}

export function ternaryFromTernaryNode(ternaryNode, context) {
  const { Ternary } = elements,
        node = ternaryNode, ///
        term = termFromTernaryNode(ternaryNode, context),
        ifExpression = ifExpressionFromTernaryNode(ternaryNode, context),
        elseExpression = elseExpressionFromTernaryNode(ternaryNode, context),
        ternaryString = ternaryStringFromTerm(term),
        string = ternaryString; ///

  context = null;

  const ternary = new Ternary(context, string, node, term, ifExpression, elseExpression);

  return ternary;
}

export function variableFromVariableNode(variableNode, context) {
  const { Variable } = elements,
        node = variableNode,  ///
        string = context.nodeAsString(node),
        type = typeFromVariableNode(variableNode, context),
        name = nameFromVariableNode(variableNode, context),
        expression = expressionFromVariableNode(variableNode, context);

  context = null;

  const variable = new Variable(context, string, node, type, name, expression);

  return variable;
}

export function referenceFromReferenceNode(referenceNode, context) {
  const { Reference } = elements,
        node = referenceNode, ///
        string = context.nodeAsString(node),
        name = nameFromReferenceNode(referenceNode, context);

  context = null;

  const reference = new Reference(context, string, node, name);

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

    context = null;

    parameter = new Parameter(context, string, node, type, name);
  }

  return parameter;
}

export function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
  const { NodeQuery } = elements,
        node = nodeQueryNode, ///
        string = context.nodeAsString(node),
        variable = variableFromNodeQueryNode(nodeQueryNode, context),
        query = queryFromNodeQueryNode(nodeQueryNode, context);

  context = null;

  const nodeQuery = new NodeQuery(context, string, node, variable, query);

  return nodeQuery;
}

export function primitiveFromPrimitiveNode(primitiveNode, context) {
  const { Primitive } = elements,
        node = primitiveNode, ///
        string = context.nodeAsString(node),
        type = typeFromPrimitiveNode(primitiveNode, context),
        value = valueFromPrimitiveNode(primitiveNode, context);

  context = null;

  const primitive = new Primitive(context, string, node, type, value);

  return primitive;
}

export function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
  const { NodesQuery } = elements,
        node = nodesQueryNode,  ///
        string = context.nodeAsString(node),
        variable = variableFromNodesQueryNode(nodesQueryNode, context),
        query = queryFromNodesQueryNode(nodesQueryNode, context);

  context = null;

  const nodesQuery = new NodesQuery(context, string, node, variable, query);

  return nodesQuery;
}

export function parametersFromParametersNode(parametersNode, context) {
  const { Parameters } = elements,
        node = parametersNode,  ///
        string = context.nodeAsString(node),
        paramtersArray = paramtersArrayFromParametersNode(parametersNode, context),
        array = paramtersArray; ///

  context = null;

  const parameters = new Parameters(context, string, node, array);

  return parameters;
}

export function expressionFromExpressionNode(expressionNode, context) {
  const { Expression } = elements,
        node = expressionNode,  ///
        term = termFromExpressionNode(expressionNode, context),
        some = someFromExpressionNode(expressionNode, context),
        every = everyFromExpressionNode(expressionNode, context),
        reduce = reduceFromExpressionNode(expressionNode, context),
        ternary = ternaryFromExpressionNode(expressionNode, context),
        nodeQuery = nodeQueryFromExpressionNode(expressionNode, context),
        nodesQuery = nodesQueryFromExpressionNode(expressionNode, context),
        returnBlock = returnBlockFromExpressionNode(expressionNode, context),
        procedureCall = procedureCallFromExpressionNode(expressionNode, context),
        properties = [
          term,
          some,
          every,
          reduce,
          ternary,
          nodeQuery,
          nodesQuery,
          returnBlock,
          procedureCall
        ],
        expressionString = expressionStringFromProperties(properties, context),
        string = expressionString;  ///

  context = null;

  const expression = new Expression(context, string, node, term, some, every, reduce, ternary, nodeQuery, nodesQuery, returnBlock, procedureCall);

  return expression;
}

export function returnBlockFromReturnBlockNode(returnBlockNode, context) {
  const { ReturnBlock } = elements,
        node = returnBlockNode, ///
        steps = stepsFromReturnBlockNode(returnBlockNode, context),
        nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context),
        returnStatement = returnStatementFromReturnBlockNode(returnBlockNode, context),
        returnBlockString = returnBlockStringFromReturnStatementNode(returnStatement),
        string = returnBlockString;  ///

  context = null;

  const returnBlock = new ReturnBlock(context, string, node, steps, nonsensical, returnStatement);

  return returnBlock;
}

export function procedureCallFromProcedureCallNode(procedureCallNode, context) {
  const { ProcedureCall } = elements,
        node = procedureCallNode, ///
        string = context.nodeAsString(node),
        reference = referenceFromProcedureCallNode(procedureCallNode, context),
        terms = termsFromProcedureCallNode(procedureCallNode, context);

  context = null;

  const procedureCall = new ProcedureCall(context, string, node, reference, terms);

  return procedureCall;
}

export function namedParameterFromNamedParameterNode(namedParameterNode, context) {
  const { NamedParameter } = elements,
        node = namedParameterNode,  ///
        string = context.nodeAsString(node),
        type = typeFromNamedParameterNode(namedParameterNode, context),
        name = nameFromNamedParameterNode(namedParameterNode, context),
        alias = aliasFromNamedParameterNode(namedParameterNode, context);

  context = null;

  const namedParameter = new NamedParameter(context, string, node, type, name, alias);

  return namedParameter;
}

export function namedParametersFromNamedParametersNode(namedParametersNode, context) {
  const { NamedParameters } = elements,
        node = namedParametersNode, ///
        string = context.nodeAsString(node),
        namedParameterNodes = namedParametersNode.getNamedParameterNodes(),
        namedParametersArray = namedParamtersArrayFromNamedParameterNodes(namedParameterNodes, context),
        array = namedParametersArray; ///

  context = null;

  const namedParameters = new NamedParameters(context, string, node, array);

  return namedParameters;
}

export function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const { ArrayAssignment } = elements,
        node = arrayAssignmentNode, ///
        string = context.nodeAsString(node),
        variable = variableFromArrayAssignmentNode(arrayAssignmentNode, context),
        parameters = parametersFromArrayAssignmentNode(arrayAssignmentNode, context);

  context = null;

  const arrayAssignment = new ArrayAssignment(context, string, node, variable, parameters);

  return arrayAssignment;
}

export function returnStatementFromReturnStatementNode(returnStatementNode, context) {
  const { ReturnStatement } = elements,
        node = returnStatementNode, ///
        string = context.nodeAsString(node),
        term = termFromReturnStatementNode(returnStatementNode, context);

  context = null;

  const returnStatement = new ReturnStatement(context, string, node, term);

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
        namedParameters = namedParametersFromObjectAssignmentNode(objectAssignmentNode, context);

  context = null;

  const objectAssignment = new ObjectAssigment(context, string, node, variable, namedParameters);

  return objectAssignment;
}

export function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const { AnonymousProcedure } = elements,
        node = anonymousProcedureNode,  ///
        type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context),
        parameters = parametersFromAnonymousProcedureNode(anonymousProcedureNode, context),
        returnBlock = returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context),
        nonymousProcedureString = anonymousProcedureStringFromTypeParametersAndReturnBlock(type, parameters, returnBlock),
        string = nonymousProcedureString; ///

  context = null;

  const anonymousProcedure = new AnonymousProcedure(context, string, node, type, parameters, returnBlock);

  return anonymousProcedure;
}

export function variableAssignmentsFromVariableAssignmentsNode(variableAssignmentsNode, context) {
  const { VariableAssignments } = elements,
        node = variableAssignmentsNode, ///
        type = typeFromVariableAssignmentsNode(variableAssignmentsNode, context),
        variableAssignmentsArray = variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context),
        variableAssignmentString = variableAssignmentStringFromTypeAndVariableAssignmentsArray(type, variableAssignmentsArray),
        array = variableAssignmentsArray, ///
        string = variableAssignmentString;  ///

  context = null;

  const variableAssignments = new VariableAssignments(context, string, node, array);

  return variableAssignments;
}

export function procedureDeclarationFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { ProcedureDeclaration } = elements,
        node = procedureDeclarationNode,  ///
        procedure = procedureFromProcedureDeclarationNode(procedureDeclarationNode, context),
        procedureDeclarationString = procedureDeclarationStringFromProcedure(procedure),
        string = procedureDeclarationString;  ///

  context = null;

  const procedureDeclaration = new ProcedureDeclaration(context, string, node, procedure);

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

export function typeFromPrimitiveNode(primitiveNode, context) {
  const type = primitiveNode.getType();

  return type;
}

export function variableFromReduceNode(reduceNode, context) {
  const variableNode = reduceNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function termFromExpressionNode(expressionNode, context) {
  let term = null;

  const termNode = expressionNode.getTermNode();

  if (termNode !== null) {
    term = termFromTermNode(termNode, context);
  }

  return term;
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

export function valueFromPrimitiveNode(primitiveNode, context) {
  const value = primitiveNode.getValue();

  return value;
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

export function typeFromNegatedTermNode(logicalTermNode, context) {
  const type = BOOLEAN_TYPE;

  return type;
}

export function termFromNegatedTermNode(negatedTermNode, context) {
  const termNode = negatedTermNode.getTermNode(),
        term = termFromTermNode(termNode, context);

  return term;
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
        negatedTerm = new NegatedTerm(context, string, node, type, term);

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
        logicalTerm = new LogicalTerm(context, string, node, type, disjunction, leftTerm, rightTerm);

  return logicalTerm;
}

export function variableFromTypeAndVariableNode(type, variableNode, context) {
  const { Variable } = elements,
        node = variableNode,  ///
        name = nameFromVariableNode(variableNode),
        expression = expressionFromTypeAndVariableNode(type, variableNode, context),
        variableString = variableStringFromName(name),
        string = variableString,  ///
        variable = new Variable(context, string, node, type, name, expression);

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

export function rightTermFromCompzrisonTermNode(comparisonTermNode, context) {
  const rightTermNode = comparisonTermNode.getRightTermNode(),
        rightTerm = termFromTermNode(rightTermNode, context);

  return rightTerm;
}

export function variableFromArrayAssignmentNode(arrayAssignmentNode, context) {
  const variableNode = arrayAssignmentNode.getVariableNode(),
        variable = variableFromVariableNode(variableNode, context);

  return variable;
}

export function typeFromVariableAssignmentsNode(variableAssignmentsNode, context) {
  const type = variableAssignmentsNode.getType();

  return type;
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
        bracketedTerm = new BracketedTerm(context, string, node, term);

  return bracketedTerm;
}

export function expressionFromVariableAssignmentNode(variableAssigmentNode, context) {
  const expressionNode = variableAssigmentNode.getExpressionNode(),
        expression = expressionFromExpressionNode(expressionNode, context);

  return expression;
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
        comparisonTerm = new ComparisonTerm(context, string, node, negated, leftTerm, rightTerm);

  return comparisonTerm;
}

export function returnBlockFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const returnBlockNode = anonymousProcedureNode.getReturnBlockNode(),
        returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);

  return returnBlock;
}

export function procedureFromProcedureDeclarationNode(procedureDeclarationNode, context) {
  const { Procedure } = elements,
        node = procedureDeclarationNode,  ///
        type = typeFromProcedureDeclarationNode(procedureDeclarationNode, context),
        label = labelFromProcedureDeclarationNode(procedureDeclarationNode, context),
        parameters = parametersFromProcedureDeclarationNode(procedureDeclarationNode, context),
        returnBlock = returnBlockFromProcedureDeclarationNode(procedureDeclarationNode, context),
        procedureString = procedureStringFromTypeLabelParametersAndReturnBlock(type, label, parameters, returnBlock),
        string = procedureString, ///
        procedure = new Procedure(context, string, node, type, label, parameters, returnBlock);

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

export function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const { VariableAssignment } = elements,
        node = variableAssignmentNode,  ///
        variable = variableFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context),
        expression = expressionFromVariableAssignmentNode(variableAssignmentNode, context),
        variableAssignmentString = variableAssignmentStringFromTypeAndVariable(type, variable, context),
        string = variableAssignmentString,  ///
        assignment = new VariableAssignment(context, string, node, variable, expression);

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

export function variableAssignmentsArrayFromTypeAndVariableAssignmentsNode(type, variableAssignmentsNode, context) {
  const variableAssignmentNodes = variableAssignmentsNode.getVariableAssignmentNodes(),
        variableAssignmentsArray = variableAssignmentNodes.map((variableAssignmentNode) => {
          const variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);

          return variableAssignment;
        });

  return variableAssignmentsArray;
}
