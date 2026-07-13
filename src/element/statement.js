"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Statement extends Element {
  constructor(context, string, node, breakPoint, arrayAssignment, objectAssignment, variableAssignments) {
    super(context, string, node, breakPoint);

    this.arrayAssignment = arrayAssignment;
    this.objectAssignment = objectAssignment;
    this.variableAssignments = variableAssignments;
  }

  getArrayAssignment() {
    return this.arrayAssignment;
  }

  getObjectAssignment() {
    return this.objectAssignment;
  }

  getVariableAssignments() {
    return this.variableAssignments;
  }

  evaluate(context, continuation) {
    if (this.arrayAssignment !== null) {
      return this.arrayAssignment.evaluate(context, continuation);
    }

    if (this.objectAssignment !== null) {
      return this.objectAssignment.evaluate(context, continuation);
    }

    if (this.variableAssignments !== null) {
      return this.variableAssignments.evaluate(context, continuation);
    }
  }

  static name = "Statement";
});
