"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameters {
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

  getParameter(index) {
    const parameter = this.array[index] || null;

    return parameter;
  }

  forEachParameter(callback) { this.array.forEach(callback); }

  matchExpressions(expressions, context) {
    const expressionsString = expressions.getString(),
          parametersString = this.string; ///

    context.trace(`Matching the ${expressionsString} expressions against the '${parametersString}' parameters...`);

    const expressionsLength = expressions.getLength(),
          parametersLength = this.getLength();

    if (expressionsLength !== parametersLength) {
      const message = `The ${expressionsString} expressions and '${parametersString}' parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachParameter((parameter, index) => {
      if (parameter !== null) {
        const expression = expressions.getExpression(index);

        parameter.matchExpression(expression, context);
      }
    });

    context.debug(`...matched the ${expressionsString} expressions against the '${parametersString}' parameters.`);
  }

  static name = "Parameters";
});
