"use strict";

import elements from "../elements";

import { expressionFromNode } from "../utilities/expression";
import { expressionsStringFromExpressionsArray } from "../utilities/string";

export function expressionsFromNodes(nodes, context) {
  const { Expressions } = elements,
        expressionsArray = expressionsArrayFromNodes(nodes, context),
        expressionsString = expressionsStringFromExpressionsArray(expressionsArray),
        string = expressionsString, ///
        array = expressionsArray, ///
        expressions = new Expressions(string, array);

  return expressions;
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

export default {
  expressionsFromNodes,
  expressionsFromExpression
};

function expressionsArrayFromNodes(nodes, context) {
  const expressionsArray = nodes.map((node) => { ///
    const expression = expressionFromNode(node, context);

    return expression;
  });

  return expressionsArray;
}

