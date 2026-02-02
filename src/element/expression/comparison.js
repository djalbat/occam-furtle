"use strict";

import Exception from "../../exception";

import { define } from "../../elements";
import { termFromBoolean } from "../../utilities/term";

export default define(class ComparisonExpression {
  constructor(string, negated, leftExpression, rightExpression) {
    this.string = string;
    this.negated = negated;
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  getString() {
    return this.string;
  }

  isNegated() {
    return this.negated;
  }

  getLeftExpression() {
    return this.leftExpression;
  }

  getRightExpression() {
    return this.rightExpression;
  }

  evaluate(context) {
    let term;

    const comparisonExpressionString = this.string; ///

    context.trace(`Evaluating the '${comparisonExpressionString}' comparison expression...`);

    const leftTerm = this.leftExpression.evaluate(context),
          rightTerm = this.rightExpression.evaluate(context),
          leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType();

    if (leftTermType !== rightTermType) {
      const leftTermString = leftTerm.getString(),
            rightTermString = rightTerm.getString(),
            message = `The '${leftTermString}' left expression's type is '${leftTermType}' whereas the '${rightTermString}' right expression's type is '${rightTermType}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftTermEqualToRightTerm = leftTerm.isEqualTo(rightTerm);

    let boolean = leftTermEqualToRightTerm; ///

    if (this.negated) {
      boolean = !boolean; ///
    }

    term = termFromBoolean(boolean, context);

    context.debug(`...evaluated the '${comparisonExpressionString}' comparison expression.`);

    return term;
  }

  static name = "ComparisonExpression";
});
