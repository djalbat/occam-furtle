"use strict";

import { Element, breakPointUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";

const { breakPointToBreakPointJSON } = breakPointUtilities;

export default define(class Parameters extends Element {
  constructor(context, string, node, breakPoint, array) {
    super(context, string, node, breakPoint);

    this.array = array;
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

  compareValues(values, context) {
    const valuesString = values.getString(),
          parametersString = this.getString(); ///

    context.trace(`Comparing the '${valuesString}' values against the '${parametersString}' parameters...`);

    const valuesLength = values.getLength(),
          parametersLength = this.getLength();

    if (valuesLength !== parametersLength) {
      const message = `The '${valuesString}' expressions and '${parametersString}' parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.forEachParameter((parameter, index) => {
      if (parameter !== null) {
        const value = values.getValue(index);

        parameter.compareValue(value, context);
      }
    });

    context.debug(`...compared the '${valuesString}' values against the '${parametersString}' parameters.`);
  }

  toJSON() {
    const string = this.getString();

    let breakPoint;

    breakPoint = this.getBreakPoint();

    const breakPointJSON = breakPointToBreakPointJSON(breakPoint);

    breakPoint = breakPointJSON;  ///

    const json = {
      string,
      breakPoint
    };

    return json;
  }

  static name = "Parameters";

  static fromJSON(json, context) {
    debugger
  }
});
