"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { LIST_TYPE_NAME } from "../typeNames";
import { valueFromInteger } from "../utilities/value";

export default define(class LengthOf extends Element {
  constructor(context, string, node, breakPoint, variable) {
    super(context, string, node, breakPoint);

    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  evaluate(context) {
    let value;

    const lengthOfString = this.getString();  ///

    context.trace(`Evaluating the '${lengthOfString}' function...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType(),
          valueTypeListType = valueType.isListType();

    if (!valueTypeListType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = value.getPrimitiveValue(),
          length = primitiveValue.length,
          integer = length; ///

    value = valueFromInteger(integer, context);

    const valueString = value.getString();

    context.debug(`...evaluated the '${lengthOfString}' function as '${valueString}'.`);

    return value;
  }

  static name = "LengthOf";
});
