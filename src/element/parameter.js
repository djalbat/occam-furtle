"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameter {
  constructor(string, type, name) {
    this.string = string;
    this.type = type;
    this.name = name;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  matchPrimitive(primitive, context) {
    const primitiveString = primitive.getString(),
          parameterString = this.string;  ///

    context.trace(`Matching the ${primitiveString} primitive against the '${parameterString}' parameter...`);

    const primitiveType = primitive.getType();

    if (this.type !== primitiveType) {
      const message = `The ${primitiveString} primitive's '${primitiveType}' type  and '${parameterString}' parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the ${primitiveString} primitive against the '${parameterString}' parameter.`);
  }

  static name = "Parameter";
});
