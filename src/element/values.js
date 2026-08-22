"use strict";

import { Element, continuationUtilities } from "occam-languages";

import { define } from "../elements";
import { valuesStringFromValuesArray } from "../utilities/string";

const { map, forEach } = continuationUtilities;

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

  mapValue(callback, forward, back) {
    return map(this.array, callback, forward, back);
  }

  forEachValue(callback) {
    this.array.forEach(callback);
  }

  evaluate(context, forward, back) {
    return this.mapValue((value, forward, back) => {
      return value.evaluate(context, forward, back);
    }, (valuesArray, back) => {
      const valuesString = valuesStringFromValuesArray(valuesArray, context),
            string = valuesString, ///
            array = valuesArray, ///
            node = null,
            breakPoint = null;

      context = null;

      const values = new Values(context, string, node, breakPoint, array);

      return forward(values, back);
    }, back);
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
