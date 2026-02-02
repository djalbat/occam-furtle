"use strict";

import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE } from "../../types";
import { termFromBoolean } from "../../utilities/term";

export default define(class LogicalTerm {
  constructor(string, type, disjunction, leftTerm, rightTerm) {
    this.string = string;
    this.type = type;
    this.disjunction = disjunction;
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  isDisjunction() {
    return this.disjunction;
  }

  getLeftTerm() {
    return this.leftTerm;
  }

  getRightTerm() {
    return this.rightTerm;
  }

  evaluate(context) {
    let term;

    const logicalTermString = this.string; ///

    context.trace(`Evaluating the '${logicalTermString}' logical term...`);

    const leftTerm = this.leftTerm.evaluate(context),
          rightTerm = this.rightTerm.evaluate(context),
          leftTermType = leftTerm.getType(),
          rightTermType = rightTerm.getType();

    if (leftTermType !== BOOLEAN_TYPE) {
      const leftTermString = leftTerm.getString(),
            message = `The '${leftTermString}' left term's type is '${leftTermType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    if (rightTermType !== BOOLEAN_TYPE) {
      const rightTermString = rightTerm.getString(),
            message = `The '${rightTermString}' right term's type is '${rightTermType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftTermBoolean = leftTerm.getBoolean(),
          rightTermBoolean = rightTerm.getBoolean(),
          boolean = this.disjunction ?
                      (leftTermBoolean || rightTermBoolean) :
                        (leftTermBoolean && rightTermBoolean);

    term = termFromBoolean(boolean, context);

    context.debug(`...evaluated the '${logicalTermString}' logical term.`);

    return term;
  }

  static name = "LogicalTerm";
});
