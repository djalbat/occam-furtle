"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Step {
  constructor(forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration) {
    this.forEachLoop = forEachLoop;
    this.arrayAssignment = arrayAssignment;
    this.conditionalBlock = conditionalBlock;
    this.objectAssigment = objectAssigment;
    this.variableAssignment = variableAssignment;
    this.variablesDeclaration = variablesDeclaration;
  }

  getForEachLoop() {
    return this.forEachLoop;
  }

  getArrayAssignment() {
    return this.arrayAssignment;
  }

  getConditionalBlock() {
    return this.conditionalBlock;
  }

  getObjectAssigment() {
    return this.objectAssigment;
  }

  getVariableAssignment() {
    return this.variableAssignment;
  }

  getVariablesDeclaration() {
    return this.variablesDeclaration;
  }

  call(context) {
    if (false) {
      ///
    } else if (this.forEachLoop !== null) {
      this.forEachLoop.call(context);
    } else if (this.arrayAssignment !== null) {
      this.arrayAssignment.call(context);
    } else if (this.conditionalBlock !== null) {
      this.conditionalBlock.call(context);
    } else if (this.objectAssigment !== null) {
      this.objectAssigment.call(context);
    } else if (this.variableAssignment !== null) {
      this.variableAssignment.call(context);
    } else if (this.variablesDeclaration !== null) {
      this.variablesDeclaration.call(context);
    }
  }

  static name = "Step";

  static fromStepNode(stepNode, context) {
    const { ForEachLoop, ArrayAssignment, ConditionalBlock, ObjectAssigment, VariablesAssignment, VariablesDeclaration } = dom,
          forEachLoop = ForEachLoop.fromStepNode(stepNode, context),
          arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context),
          conditionalBlock = ConditionalBlock.fromStepNode(stepNode, context),
          objectAssigment = ObjectAssigment.fromStepNode(stepNode, context),
          variableAssignment = VariablesAssignment.fromStepNode(stepNode, context),
          variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context),
          step = new Step(forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration);

    return step;
  }
});
