"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { BOOLEAN_TYPE } from "../types";
import { valueFromBoolean } from "../utilities/value";

export default define(class Value extends Element {
  constructor(context, string, node, breakPoint, variable, primitive) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.primitive = primitive;
  }

  getVariable() {
    return this.variable;
  }

  getPrimitive() {
    return this.primitive;
  }

  getPrimitiveValue() {
    const primitiveValue = this.primitive.getValue();

    return primitiveValue;
  }

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.variable !== null) {
      type = this.variable.getType();
    } else if (this.primitive !== null) {
      type = this.primitive.getType();
    }

    return type;
  }

  isBoolean() {
    const type = this.getType(),
          boolean = (type === BOOLEAN_TYPE);

    return boolean;
  }

  evaluate(context) {
    let value;

    if (false) {
      ///
    } else if (this.variable !== null) {
      value = this.variable.evaluate(context);
    } else if (this.primitive !== null) {
      value = this.primitive.evaluate(context);
    }

    return value;
  }

  isEqualTo(value) {
    let equalTo = false;

    if (false) {
      ///
    } else if (this.variable !== null) {
      const variable = value.getVariable();

      if (variable !== null) {
        equalTo = this.variable.isEqualTo(variable);
      }
    } else if (this.primitive !== null) {
      const primitive = value.getPrimitive();

      if (primitive !== null) {
        equalTo = this.primitive.isEqualTo(primitive);
      }
    }

    return equalTo;
  }

  static name = "Value";

  static fromPrimitive(primitive, context) {
    const primitiveString = primitive.getString(),
          string = primitiveString, ///
          node = null,
          breakPoint = null,
          variable = null;

    context = null;

    const value = new Value(context, string, node, breakPoint, variable, primitive);

    return value;
  }
});
