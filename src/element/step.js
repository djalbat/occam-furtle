"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Step extends Element {
  constructor(context, string, node, breakPoint, arrayAssignment, objectAssigment, variableAssignments) {
    super(context, string, node, breakPoint);

    this.arrayAssignment = arrayAssignment;
    this.objectAssigment = objectAssigment;
    this.variableAssignments = variableAssignments;
  }

  getArrayAssignment() {
    return this.arrayAssignment;
  }

  getObjectAssigment() {
    return this.objectAssigment;
  }

  getVariableAssignments() {
    return this.variableAssignments;
  }

  async evaluate(context) {
    if (false) {
      ///
    } else if (this.arrayAssignment !== null) {
      this.arrayAssignment.evaluate(context);
    } else if (this.objectAssigment !== null) {
      this.objectAssigment.evaluate(context);
    } else if (this.variableAssignments !== null) {
      await this.variableAssignments.evaluate(context);
    }
  }

  static name = "Step";
});
