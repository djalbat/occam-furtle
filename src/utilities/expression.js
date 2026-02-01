"use strict";

import elements from "../elements";

import { primitiveFromNode, primitiveFromNodes, primitiveFromBoolean, primitiveFromStringLiteral } from "../utilities/primitive";

export function expressionFromNode(node, context) {
  const { Expression } = elements,
        primitive = primitiveFromNode(node, context),
        string = primitive.getString(),
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
        expression = new Expression(string, primitive, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function expressionFromNodes(nodes, context) {
  const { Expression } = elements,
        primitive = primitiveFromNodes(nodes, context),
        string = primitive.getString(),
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
        expression = new Expression(string, primitive, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function expressionFromBoolean(boolean, context) {
  const { Expression } = elements,
        primitive = primitiveFromBoolean(boolean, context),
        string = primitive.getString(),
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
        expression = new Expression(string, primitive, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}

export function expressionFromStringLiteral(stringLiteral, context) {
  const { Expression } = elements,
        primitive = primitiveFromStringLiteral(stringLiteral, context),
        string = primitive.getString(),
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
        expression = new Expression(string, primitive, some, every, reduce, ternary, variable, nodeQuery, nodesQuery, comparison, returnBlock, procedureCall, negatedExpression, logicalExpression, bracketedExpression);

  return expression;
}
