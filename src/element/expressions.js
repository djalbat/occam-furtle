"use strict";

import { define } from "../elements";
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
    const expressionsArray = this.mapExpression((expression) => {
            expression = expression.evaluate(context);

            return expression;
          }),
          expressionsString = expressionsStringFromExpressionsArray(expressionsArray, context),
          string = expressionsString, ///
          array = expressionsArray, ///
          expressions = new Expressions(string, array);

    return expressions;
  }

  static name = "Expressions";
});
