"use strict";

import { Element } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";
import { BOOLEAN_TYPE_NAME } from "../../typeNames";
import { valueFromBoolean } from "../../utilities/value";

export default define(class LogicalTerm extends Element {
  constructor(context, string, node, breakPoint, type, disjunction, leftTerm, rightTerm) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.disjunction = disjunction;
    this.leftTerm = leftTerm;
    this.rightTerm = rightTerm;
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

  evaluate(context, forward, back) {
    let value;

    const logicalTermString = this.getString(); ///

    context.trace(`Evaluating the '${logicalTermString}' logical term...`);

    return this.leftTerm.evaluate(context, (leftValue, back) => {
      return this.rightTerm.evaluate(context, (rightValue, back) => {
        const leftValueType = leftValue.getType(),
              rightValueType = rightValue.getType(),
              leftValueTypeBooleanType = leftValueType.isBooleanType(),
              rightValueTypeBooleanType = rightValueType.isBooleanType();

        if (!leftValueTypeBooleanType) {
          const leftValueString = leftValue.getString(),
                message = `The '${leftValueString}' left term's type is '${leftValueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
                exception = Exception.fromMessage(message);

          return back(exception);
        }

        if (!rightValueTypeBooleanType) {
          const rightValueString = rightValue.getString(),
                message = `The '${rightValueString}' right term's type is '${rightValueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
                exception = Exception.fromMessage(message);

          return back(exception);
        }

        const leftValuePrimitiveValue = leftValue.getPrimitiveValue(),
              rightValuePrimitiveValue = rightValue.getPrimitiveValue(),
              leftBoolean =leftValuePrimitiveValue, ///
              rightBoolean = rightValuePrimitiveValue, ///
              boolean = this.disjunction ?
                          (leftBoolean || rightBoolean) :
                            (leftBoolean && rightBoolean);

        value = valueFromBoolean(boolean, context);

        const valueString = value.getString();

        context.debug(`...evaluated the '${logicalTermString}' logical value as '${valueString}'.`);

        return forward(value, back);
      }, back);
    }, back);
  }

  static name = "LogicalTerm";
});
