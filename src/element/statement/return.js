"use strict";

import { define } from "../../elements";

export default define(class ReturnStatement {
  constructor(string, primitive) {
    this.string = string;
    this.primitive = primitive;
  }

  getString() {
    return this.string;
  }

  getExpression() {
    return this.primitive;
  }

  evaluate(context) {
    let primitive;

    const returnStatementString = this.string;  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    primitive = this.primitive; ///

    context.debug(`...evaluated the '${returnStatementString}' return statement.`);

    return primitive;
  }

  static name = "ReturnStatement";
});
