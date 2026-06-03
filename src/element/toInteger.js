"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { TEN } from "../constants";
import { define } from "../elements";
import { valueFromInteger } from "../utilities/value";
import { LIST_TYPE_NAME, STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, INTEGER_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../typeNames";

export default define(class ToInteger extends Element {
  constructor(context, string, node, breakPoint, variable) {
    super(context, string, node, breakPoint);

    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  evaluate(context) {
    let value;

    const toIntegerString = this.getString();  ///

    context.trace(`Evaluating the '${toIntegerString}' function...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType(),
          valueTypeName = valueType.getName();

    let integer;

    switch (valueTypeName) {
      case LIST_TYPE_NAME:
      case BOOLEAN_TYPE_NAME:
      case INTEGER_TYPE_NAME: {
        const message = `Cannot evaluate the '${toIntegerString}' function because the '${valueTypeName}' type of its argument is not supported.`,
              exception = Exception.fromMessage(message);

        throw exception;
      }

      case STRING_TYPE_NAME:
      case NOMINAL_VALUE_TYPE_NAME: {
        const radix = TEN,
              valueString = value.getString();

        integer = parseInt(valueString, radix);

        const nan = isNaN(integer);

        if (nan) {
          const message = `Cannot evaluate the '${toIntegerString}' function because the '${valueTypeName}' value is not an integer.`,
                exception = Exception.fromMessage(message);

          throw exception;
        }

        break;
      }
    }

    value = valueFromInteger(integer);

    const valueString = value.getString();

    context.debug(`...evaluated the '${toIntegerString}' function as '${valueString}'.`);

    return value;
  }

  static name = "ToInteger";
});
