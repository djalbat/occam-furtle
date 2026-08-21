"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class ReturnStatement extends Element {
  constructor(context, string, node, breakPoint, value) {
    super(context, string, node, breakPoint);

    this.value = value;
  }

  getExpression() {
    return this.value;
  }

  evaluate(context, back, forward) {
    const returnStatementString = this.getString();  ///

    context.trace(`Evaluating the '${returnStatementString}' return statement...`);

    return this.value.evaluate(context, back, (value) => {
      const valueString = value.getString();

      context.debug(`...evaluated the '${returnStatementString}' return statement as '${valueString}'.`);

      return forward(value);
    });
  }

  static name = "ReturnStatement";
});
