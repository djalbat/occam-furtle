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
    if (false) {
      ///
    } else if (this.arrayAssignment !== null) {
      this.arrayAssignment.evaluate(context, continuation);
    } else if (this.objectAssignment !== null) {
      this.objectAssignment.evaluate(context, continuation);
    } else if (this.variableAssignments !== null) {
      this.variableAssignments.evaluate(context, continuation);
    }
  }

  static name = "Statement";
});
