"use strict";

import elements from "../elements";

import { define } from "../elements";
import { EMPTY_STRING } from "../constants";

export default define(class Step {
  constructor(string, arrayAssignment, objectAssigment, variablesDeclaration) {
    this.string = string;
    this.arrayAssignment = arrayAssignment;
    this.objectAssigment = objectAssigment;
    this.variablesDeclaration = variablesDeclaration;
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

  getVariablesDeclaration() {
    return this.variablesDeclaration;
  }

  evaluate(context) {
    if (false) {
      ///
    } else if (this.arrayAssignment !== null) {
      this.arrayAssignment.evaluate(context);
    } else if (this.objectAssigment !== null) {
      this.objectAssigment.evaluate(context);
    } else if (this.variablesDeclaration !== null) {
      this.variablesDeclaration.evaluate(context);
    }
  }

  static name = "Step";

  static fromStepNode(stepNode, context) {
    const step = stepFromStepNode(stepNode, context);

    return step;
  }
});

function stepFromStepNode(stepNode, context) {
  const { Step, ArrayAssignment, ObjectAssigment, VariableAssignments } = elements,
        string = stringFromNothing(context),
        arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context),
        objectAssigment = ObjectAssigment.fromStepNode(stepNode, context),
        variablesDeclaration = VariableAssignments.fromStepNode(stepNode, context),
        step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);

  return step;
}

function stringFromNothing(context) {
  const string = EMPTY_STRING;

  return string;
}