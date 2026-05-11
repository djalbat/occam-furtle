"use strict";

import { Element } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";
import { valueFromBoolean } from "../../utilities/value";

export default define(class ComparisonTerm extends Element {
  constructor(context, string, node, breakPoint, negated, leftTerm, rightTerm) {
    super(context, string, node, breakPoint);

    this.negated = negated;
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
  }

  isNegated() {
    return this.negated;
  }

  getLeftTerm() {
    return this.leftTerm;
  }

  getRightTerm() {
    return this.rightTerm;
  }

  evaluate(context) {
    let value;

    const comparisonTermString = this.getString(); ///

    context.trace(`Evaluating the '${comparisonTermString}' comparison term...`);

    const leftValue = this.leftTerm.evaluate(context),
          rightValue = this.rightTerm.evaluate(context),
          leftValueType = leftValue.getType(),
          rightValueType = rightValue.getType();

    if (leftValueType !== rightValueType) {
      const leftValueString = leftValue.getString(),
            rightValueString = rightValue.getString(),
            message = `The '${leftValueString}' left term's type is '${leftValueType}' whereas the '${rightValueString}' right term's type is '${rightTermType}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftValueEqualToRightValue = leftValue.isEqualTo(rightValue);

    let boolean = leftValueEqualToRightValue; ///

    if (this.negated) {
      boolean = !boolean; ///
    }

    value = valueFromBoolean(boolean, context);

    const valueString = value.getString();

    context.debug(`...evaluated the '${comparisonTermString}' comparison value as '${valueString}'.`);

    return value;
  }

  static name = "ComparisonTerm";
});
