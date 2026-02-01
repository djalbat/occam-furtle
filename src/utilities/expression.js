"use strict";

import elements from "../elements";

import { expressionStringFromNode, expressionStringFromNodes, expressionStringFromBoolean, expressionStringFromStringLiteral } from "../utilities/string";

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

