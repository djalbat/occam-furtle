"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { STRING_TYPE_NAME } from "../typeNames";
import { valueFromBoolean } from "../utilities/value";

export default define(class Contains extends Element {
  constructor(context, string, node, breakPoint, variable, substring) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.substring = substring;
  }

  getVariable() {
    return this.variable;
  }

  getSubstring() {
    return this.substring;
  }

  evaluate(context) {
    let value;

    const containsString = this.getString();  ///

    context.trace(`Evaluating the '${containsString}' function...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType(),
          valueTypeStringType = valueType.isStringType();

    if (!valueTypeStringType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${STRING_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const string = value.getString(),
          boolean = string.contains(this.substring);

    value = valueFromBoolean(boolean);

    const valueString = value.getString();

    context.debug(`...evaluated the '${containsString}' function as '${valueString}'.`);

    return value;
  }

  static name = "Contains";
});
