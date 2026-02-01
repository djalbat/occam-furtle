"use strict";

import { define } from "../elements";

export default define(class Term {
  constructor(string, variable, primitive) {
    this.string = string;
    this.variable = variable;
    this.primitive = primitive;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getPrimitive() {
    return this.primitive;
  }

  getNode() { return this.primitive.getNode(); }

  getNodes() { return this.primitive.getNodes(); }

  getNumber() { return this.primitive.getNumber(); }

  getBoolean() { return this.primitive.getBoolean(); }

  getStringLiteral() { return this.primitive.getStringLiteral(); }

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

  evaluate(context) {
    let term;

    if (false) {
      ///
    } else if (this.variable !== null) {
      term = this.variable.evaluate(context);
    } else if (this.primitive !== null) {
      term = this.primitive.evaluate(context);
    }

    return term;
  }

  isEqualTo(expression) {
    const primitive = expression.getPrimitive(),
          equalTo = this.primitive.isEqualTo(primitive);

    return equalTo;
  }

  static name = "Term";
});
