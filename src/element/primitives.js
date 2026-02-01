"use strict";

import { define } from "../elements";
import { primitivesStringFromPrimitivesArray } from "../utilities/string";

export default define(class Primitives {
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

  getPrimitive(index) {
    const primitive = this.array[index] || null;  ///

    return primitive;
  }

  addPrimitive(primitive) {
    this.array.push(primitive);
  }

  mapPrimitive(callback) { return this.array.map(callback); }

  forEachPrimitive(callback) { this.array.forEach(callback); }

  evaluate(context) {
    const primitivesArray = this.mapPrimitive((primitive) => {
            primitive = primitive.evaluate(context);

            return primitive;
          }),
          primitivesString = primitivesStringFromPrimitivesArray(primitivesArray, context),
          string = primitivesString, ///
          array = primitivesArray, ///
          primitives = new Primitives(string, array);

    return primitives;
  }

  static name = "Primitives";
});
