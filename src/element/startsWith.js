"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { STRING_TYPE_NAME } from "../typeNames";
import { valueFromBoolean } from "../utilities/value";

export default define(class StartsWith extends Element {
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

  evaluate(context, back, forward) {
    const startsWithString = this.getString();  ///

    context.trace(`Evaluating the '${startsWithString}' function...`);

    return this.variable.evaluate(context, back, (value) => {
      const valueType = value.getType(),
            valueTypeStringType = valueType.isStringType();

      if (!valueTypeStringType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's '${valueType}' type should be '${STRING_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      const string = value.getString(),
            boolean = string.startsWith(this.substring);

      value = valueFromBoolean(boolean);

      const valueString = value.getString();

      context.debug(`...evaluated the '${startsWithString}' function as '${valueString}'.`);

      return forward(value);
    });
  }

  static name = "StartsWith";
});
