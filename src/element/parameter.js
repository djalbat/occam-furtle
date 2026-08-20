"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameter extends Element {
  constructor(context, string, node, breakPoint, type, name) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.name = name;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  compareValue(value, context, back, forward) {
    const valueString = value.getString(),
          parameterString = this.getString();  ///

    context.trace(`Comparing the '${valueString}' value against the '${parameterString}' parameter...`);

    const valueType = value.getType(),
          typeEqualToValueType = this.type.isEqualTo(valueType);

    if (!typeEqualToValueType) {
      const typeString = ths.type.getString(),
            message = `The '${valueString}' value's '${valueType}' type is not equal to the '${parameterString}' parameter's '${typeString}' type.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    context.debug(`...comparing the '${valueString}' value against the '${parameterString}' parameter.`);

    return forward();
  }

  static name = "Parameter";
});
