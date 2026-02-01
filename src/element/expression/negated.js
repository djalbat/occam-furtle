"use strict";

import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE } from "../../types";
import { expressionFromBoolean } from "../../utilities/expression";

export default define(class NegatedExpression {
  constructor(string, type, expression) {
    this.string = string;
    this.type = type;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getExpression() {
    return this.expression;
  }

  evaluate(context) {
    let expression;

    const negatedExpressionString = this.string; ///

    context.trace(`Evaluating the '${negatedExpressionString}' negated expression...`);

    expression = this.expression.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== BOOLEAN_TYPE) {
      const expressionString = expression.getString(),
            message = `The ${expressionString} left expression's type is '${expressionType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let boolean = expression.getBoolean();

    boolean = !boolean;

    expression = expressionFromBoolean(boolean, context);

    context.debug(`...evaluated the '${negatedExpressionString}' negated expression.`);

    return expression;
  }

  static name = "NegatedExpression";
});
