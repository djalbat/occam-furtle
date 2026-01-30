"use strict";

import { define } from "../../elements";

export default define(class BracketedExpression {
  constructor(string, expression) {
    this.string = string;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getExpression() {
    return this.expression;
  }

  getType() { return this.expression.getType(); }

  evaluate(context) {
    let expression;

    const bracketedExpressionString = this.string; ///

    context.trace(`Evaluating the '${bracketedExpressionString}' bracketed expression...`);

    expression = this.expression.evaluate(context);

    context.debug(`...evaluated the '${bracketedExpressionString}' bracketed expression.`);

    return expression;
  }

  static name = "BracketedExpression";
});
