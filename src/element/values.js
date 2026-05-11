"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { valuesStringFromValuesArray } from "../utilities/string";

export default define(class Values extends Element {
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

  getValue(index) {
    const value = this.array[index] || null;  ///

    return value;
  }

  addValue(value) {
    this.array.push(value);
  }

  mapValue(callback) { return this.array.map(callback); }

  forEachValue(callback) { this.array.forEach(callback); }

  evaluate(context) {
    const valuesArray = this.mapValue((value) => {
            value = value.evaluate(context);

            return value;
          }),
          valuesString = valuesStringFromValuesArray(valuesArray, context),
          string = valuesString, ///
          array = valuesArray, ///
          node = null,
          breakPoint = null;

    context = null;

    const values = new Values(context, string, node, breakPoint, array);

    return values;
  }

  static name = "Values";

  static fromValue(value, context) {
    const valuesArray = [
            value
          ],
          valuesString = valuesStringFromValuesArray(valuesArray, context),
          string = valuesString, ///
          array = valuesArray, ///
          node = null,
          breakPoint = null;

    context = null;

    const values = new Values(context, string, node, breakPoint, array);

    return values;
  }
});
