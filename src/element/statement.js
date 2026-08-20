"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Statement extends Element {
  constructor(context, string, node, breakPoint, listAssignment, objectAssignment, variableAssignments) {
    super(context, string, node, breakPoint);

    this.listAssignment = listAssignment;
    this.objectAssignment = objectAssignment;
    this.variableAssignments = variableAssignments;
  }

  getListAssignment() {
    return this.listAssignment;
  }

  getObjectAssignment() {
    return this.objectAssignment;
  }

  getVariableAssignments() {
    return this.variableAssignments;
  }

  evaluate(context, back, forward) {
    if (this.listAssignment !== null) {
      return this.listAssignment.evaluate(context, back, forward);
    }

    if (this.objectAssignment !== null) {
      return this.objectAssignment.evaluate(context, back, forward);
    }

    if (this.variableAssignments !== null) {
      return this.variableAssignments.evaluate(context, back, forward);
    }
  }

  static name = "Statement";
});
