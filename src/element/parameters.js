"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Parameters {
  constructor(string, array) {
    this.string = string;
    this.array = array;
  }

  getString() {
    return this.string;
  }

  getArray() {
    return this.array;
  }

  getLength() {
    const length = this.array.length;

    return length;
  }

  getParameter(index) {
    const parameter = this.array[index] || null;

    return parameter;
  }

  forEachParameter(callback) { this.array.forEach(callback); }

  matchPrimitives(primitives, context) {
    const primitivesString = primitives.getString(),
          parametersString = this.string; ///

    context.trace(`Matching the ${primitivesString} primitives against the '${parametersString}' parameters...`);

    const primitivesLength = primitives.getLength(),
          parametersLength = this.getLength();

    if (primitivesLength !== parametersLength) {
      const message = `The ${primitivesString} expressions and '${parametersString}' parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachParameter((parameter, index) => {
      if (parameter !== null) {
        const primitive = primitives.getExpression(index);

        parameter.matchPrimitive(primitive, context);
      }
    });

    context.debug(`...matched the ${primitivesString} primitives against the '${parametersString}' parameters.`);
  }

  static name = "Parameters";
});
