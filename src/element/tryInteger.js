"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { valueFromBoolean } from "../utilities/value";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, INTEGER_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../typeNames";

export const integerRegularExpresssion = /^[+-]?\d+$/;

export default define(class TryInteger extends Element {
  constructor(context, string, node, breakPoint, variable) {
    super(context, string, node, breakPoint);

    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  evaluate(context) {
    let value;

    const tryIntegerString = this.getString();  ///

    context.trace(`Evaluating the '${tryIntegerString}' function...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType(),
          valueTypeName = valueType.getName();

    let boolean;

    switch (valueTypeName) {
      case LIST_TYPE_NAME:
      case BOOLEAN_TYPE_NAME:
      case INTEGER_TYPE_NAME: {
        const message = `Cannot evaluate the '${tryIntegerString}' function because the '${valueTypeName}' type of its argument is not supported.`,
              exception = Exception.fromMessage(message);

        throw exception;
      }

      case STRING_TYPE_NAME:
      case NOMINAL_VALUE_TYPE_NAME: {
        const valueString = value.getString();

        boolean = integerRegularExpresssion.test(valueString);

        break;
      }
    }

    value = valueFromBoolean(boolean);

    const valueString = value.getString();

    context.debug(`...evaluated the '${tryIntegerString}' function as '${valueString}'.`);

    return value;
  }

  static name = "TryInteger";
});

