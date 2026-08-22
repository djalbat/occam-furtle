"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateParameters } from "../process/instantiate";
import { parametersArrayFromParametersNode } from "../utilities/element";

const { forEach } = continuationUtilities,
      { breakPointToBreakPointJSON } = breakPointUtilities;

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

  forEachParameter(callback, forward, back) {
    return forEach(this.array, callback, forward, back);
  }

  compareValues(values, context, forward, back) {
    const valuesString = values.getString(),
          parametersString = this.getString(); ///

    context.trace(`Comparing the '${valuesString}' values against the '${parametersString}' parameters...`);

    const valuesLength = values.getLength(),
          parametersLength = this.getLength();

    if (valuesLength !== parametersLength) {
      const message = `The '${valuesString}' expressions and '${parametersString}' parameters are not of the same length.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    return this.forEachParameter((parameter, forward, back, index) => {
      if (parameter === null) {
        return forward(back);
      }

      const value = values.getValue(index);

      return parameter.compareValue(value, context, forward, back);
    }, (back) => {
      context.debug(`...compared the '${valuesString}' values against the '${parametersString}' parameters.`);

      return forward(back);
    }, back);
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
    return instantiate((context) => {
      const { string } = json,
            parametersNode = instantiateParameters(string, context),
            node = parametersNode,  ///
            breakPoint = null,
            parametersArray = parametersArrayFromParametersNode(parametersNode, context),
            array = parametersArray; ///

      context = null;

      const parameters = new Parameters(context, string, node, breakPoint, array);

      return parameters;
    }, context);
  }
});
