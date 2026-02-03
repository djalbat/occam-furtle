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
    let term;

    const bracketedExpressionString = this.string; ///

    context.trace(`Evaluating the '${bracketedExpressionString}' bracketed expression...`);

    term = this.expression.evaluate(context);

    const termString = term.getString();

    context.debug(`...evaluated the '${bracketedExpressionString}' bracketed expression as '${termString}'.`);

    return term;
  }

  static name = "BracketedExpression";
});
