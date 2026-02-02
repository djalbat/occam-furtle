"use strict";

import { define } from "../elements";

export default define(class Step {
  constructor(string, arrayAssignment, objectAssigment, variablessAssignment) {
    this.string = string;
    this.arrayAssignment = arrayAssignment;
    this.objectAssigment = objectAssigment;
    this.variablessAssignment = variablessAssignment;
  }

  getString() {
    return this.string;
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

  evaluate(context) {
    if (false) {
      ///
    } else if (this.arrayAssignment !== null) {
      this.arrayAssignment.evaluate(context);
    } else if (this.objectAssigment !== null) {
      this.objectAssigment.evaluate(context);
    } else if (this.variablessAssignment !== null) {
      this.variablessAssignment.evaluate(context);
    }
  }

  static name = "Step";
});
