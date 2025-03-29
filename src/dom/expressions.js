"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";

const expressionNodesQuery = nodesQuery("/expressions/expression"),
      procedureCallExpressionsNodeQuery = nodeQuery("/procedureCall/expressions");

export default domAssigned(class Expressions {
  constructor(string, array) {
    this.string = string;
    this.array = array;
  }

  getString() {
    return this.string;
  }

  getArray() {
    return this.array;
  }

  getLength() {
    const length = this.array.length;

    return length;
  }

  getExpression(index) {
    const expression = this.array[index] || null;  ///

    return expression;
  }

  addExpression(expression) {
    this.array.push(expression);
  }

  mapExpression(callback) { return this.array.map(callback); }

  forEachExpression(callback) { this.array.forEach(callback); }

  evaluate(context) {
    const array = this.mapExpression((expression) => {
            expression = expression.evaluate(context);

            return expression;
          }),
          expressions = Expressions.fromArray(array, context); ///

    return expressions;
  }

  static name = "Expressions";

  static fromNodes(nodes, context) {
    const array = arrayFromNodes(nodes, context),
          string = stringFromArray(array, context),
          expressions = new Expressions(string, array);

    return expressions;
  }

  static fromArray(array, context) {
    const string = stringFromArray(array, context),
          expressions = new Expressions(string, array);

    return expressions;
  }

  static fromExpression(expression, context) {
    const array = [
            expression
          ],
          string = stringFromArray(array, context),
          expressions = new Expressions(string, array);

    return expressions;
  }

  static fromProcedureCallNode(procedureCallNode, context) {
    const procedureCallExpressionsNode = procedureCallExpressionsNodeQuery(procedureCallNode),
          expressionsNode = procedureCallExpressionsNode, ///
          expressions = expressionsFromExpressionsNode(expressionsNode, context);

    return expressions;
  }
});

function arrayFromNodes(nodes, context) {
  const { Expression } = dom,
        array = nodes.map((node) => { ///
          const expression = Expression.fromNode(node, context);

          return expression;
        });

  return array;
}

function stringFromArray(array, context) {
  const expressionsString = array.reduce((expressionsString, expression) => {
          const expressionString = expression.asString(context);

          expressionsString = (expressionsString === null) ?
                           expressionString :
                            `${expressionsString}, ${expressionString}`;

          return expressionsString;
        }, null),
        string = expressionsString;  ///

  return string;
}

function arrayFromExpressionNodes(expressionNodes, context) {
  const { Expression } = dom,
        array = expressionNodes.map((expressionNode) => { ///
          const expression = Expression.fromExpressionNode(expressionNode, context);

          return expression;
        });

  return array;
}

function expressionsFromExpressionsNode(expressionsNode, context) {
  const { Expressions } = dom,
        node = expressionsNode, ///
        string = context.nodeAsString(node),
        expressionNodes = expressionNodesQuery(expressionsNode),
        array = arrayFromExpressionNodes(expressionNodes, context),
        expressions = new Expressions(string, array);

  return expressions;
}
