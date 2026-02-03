"use strict";

import { define } from "../../elements";

export default define(class ReturnStatement {
  constructor(string, term) {
    this.string = string;
    this.term = term;
  }

  getString() {
    return this.string;
  }

  getExpression() {
    return this.term;
  }

  evaluate(context) {
    let term;

    const returnStatementString = this.string;  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    term = this.term.evaluate(context);

    const termString = term.getString();

    context.debug(`...evaluated the '${returnStatementString}' return statement as '${termString}'.`);

    return term;
  }

  static name = "ReturnStatement";
});
