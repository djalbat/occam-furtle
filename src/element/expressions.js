"use strict";

import elements from "../elements";

import { define } from "../elements";
import { expressionsFromExpressionsNode } from "../utilities/element";
import { expressionsStringFromExpressionsArray } from "../utilities/string";

export default define(class Expressions {
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
          string = expressionsStringFromExpressionsArray(array, context),
          expressions = new Expressions(string, array);

    return expressions;
  }

  static fromArray(array, context) {
    const string = expressionsStringFromExpressionsArray(array, context),
          expressions = new Expressions(string, array);

    return expressions;
  }

  static fromExpression(expression, context) {
    const array = [
            expression
          ],
          string = expressionsStringFromExpressionsArray(array, context),
          expressions = new Expressions(string, array);

    return expressions;
  }
});

function arrayFromNodes(nodes, context) {
  const { Expression } = elements,
        array = nodes.map((node) => { ///
          const expression = Expression.fromNode(node, context);

          return expression;
        });

  return array;
}
