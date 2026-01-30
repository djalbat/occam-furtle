"use strict";

import { define } from "../../elements";

export default define(class ReturnStatement {
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

  evaluate(context) {
    let expression;

    const returnStatementString = this.string;  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    expression = this.expression.evaluate(context);

    context.debug(`...evaluated the '${returnStatementString}' return statement.`);

    return expression;
  }

  static name = "ReturnStatement";
});
