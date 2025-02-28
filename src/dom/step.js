"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Step {
  constructor(string, arrayAssignment, objectAssigment, conditionalBlocks, variablesDeclaration) {
    this.string = string;
    this.arrayAssignment = arrayAssignment;
    this.objectAssigment = objectAssigment;
    this.conditionalBlocks = conditionalBlocks;
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

  getConditionalBlocks() {
    return this.conditionalBlocks;
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
    } else if (this.conditionalBlocks !== null) {
      this.conditionalBlocks.evaluate(context);
    } else if (this.variablesDeclaration !== null) {
      this.variablesDeclaration.evaluate(context);
    }
  }

  static name = "Step";

  static fromStepNode(stepNode, context) {
    const { ArrayAssignment, ObjectAssigment, ConditionalBlocks, VariablesDeclaration } = dom,
          node = stepNode,  ///
          string = context.nodeAsString(node),
          arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context),
          objectAssigment = ObjectAssigment.fromStepNode(stepNode, context),
          conditionalBlocks = ConditionalBlocks.fromStepNode(stepNode, context),
          variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context),
          step = new Step(string, arrayAssignment, objectAssigment, conditionalBlocks, variablesDeclaration);

    return step;
  }
});
