"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";

export default define(class ReturnStatement extends Element {
  constructor(context, string, node, breakPoint, value) {
    super(context, string, node, breakPoint);

    this.value = value;
  }

  getExpression() {
    return this.value;
  }

  evaluate(context) {
    let value;

    const returnStatementString = this.getString();  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    value = this.value.evaluate(context);

    const valueString = value.getString();

    context.debug(`...evaluated the '${returnStatementString}' return statement as '${valueString}'.`);

    return value;
  }

  static name = "ReturnStatement";
});
