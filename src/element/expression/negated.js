"use strict";

import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE } from "../../types";
import { termFromBoolean } from "../../utilities/term";

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
    let term;

    const negatedExpressionString = this.string; ///

    context.trace(`Evaluating the '${negatedExpressionString}' negated expression...`);

    term = this.expression.evaluate(context);

    const termType = term.getType();

    if (termType !== BOOLEAN_TYPE) {
      const termString = term.getString(),
            message = `The '${termString}' left term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let boolean = term.getBoolean();

    boolean = !boolean;

    term = termFromBoolean(boolean, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${negatedExpressionString}' negated expression as '${termString}'.`);

    return term;
  }

  static name = "NegatedExpression";
});
