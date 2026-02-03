"use strict";

import Element from "../../element";
import Exception from "../../exception";

import { define } from "../../elements";
import { termFromBoolean } from "../../utilities/term";

export default define(class ComparisonTerm extends Element {
  constructor(context, string, node, negated, leftTerm, rightTerm) {
    super(context, string, node)

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
    let term;

    const comparisonTermString = this.getString(); ///

    context.trace(`Evaluating the '${comparisonTermString}' comparison term...`);

    const leftTerm = this.leftTerm.evaluate(context),
          rightTerm = this.rightTerm.evaluate(context),
          leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType();

    if (leftTermType !== rightTermType) {
      const leftTermString = leftTerm.getString(),
            rightTermString = rightTerm.getString(),
            message = `The '${leftTermString}' left term's type is '${leftTermType}' whereas the '${rightTermString}' right term's type is '${rightTermType}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftTermEqualToRightTerm = leftTerm.isEqualTo(rightTerm);

    let boolean = leftTermEqualToRightTerm; ///

    if (this.negated) {
      boolean = !boolean; ///
    }

    term = termFromBoolean(boolean, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${comparisonTermString}' comparison term as '${termString}'.`);

    return term;
  }

  static name = "ComparisonTerm";
});
