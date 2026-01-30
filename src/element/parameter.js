"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameter {
  constructor(string, type, name) {
    this.string = string;
    this.type = type;
    this.name = name;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  matchExpression(expression, context) {
    const expressionString = expression.asString(context),
          parameterString = this.string;  ///

    context.trace(`Matching the ${expressionString} expression against the '${parameterString}' parameter...`);

    const expressionType = expression.getType();

    if (this.type !== expressionType) {
      const message = `The ${expressionString} expression's '${expressionType}' type  and '${parameterString}' parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the ${expressionString} expression against the '${parameterString}' parameter.`);
  }

  static name = "Parameter";
});
