"use strict";

import { define } from "../../elements";

import Element from "../../element";

export default define(class ReturnStatement extends Element {
  constructor(context, string, node, term) {
    super(context, string, node)

    this.term = term;
  }

  getExpression() {
    return this.term;
  }

  evaluate(context) {
    let term;

    const returnStatementString = this.getString();  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    term = this.term.evaluate(context);

    const termString = term.getString();

    context.debug(`...evaluated the '${returnStatementString}' return statement as '${termString}'.`);

    return term;
  }

  static name = "ReturnStatement";
});
