"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Step extends Element {
  constructor(context, string, node, arrayAssignment, objectAssigment, variablessAssignment) {
    super(context, string, node)

    this.arrayAssignment = arrayAssignment;
    this.objectAssigment = objectAssigment;
    this.variablessAssignment = variablessAssignment;
  }

  getArrayAssignment() {
    return this.arrayAssignment;
  }

  getObjectAssigment() {
    return this.objectAssigment;
  }

  getVariablessAssignment() {
    return this.variablessAssignment;
  }

  async evaluate(context) {
    if (false) {
      ///
    } else if (this.arrayAssignment !== null) {
      this.arrayAssignment.evaluate(context);
    } else if (this.objectAssigment !== null) {
      this.objectAssigment.evaluate(context);
    } else if (this.variablessAssignment !== null) {
      await this.variablessAssignment.evaluate(context);
    }
  }

  static name = "Step";
});
