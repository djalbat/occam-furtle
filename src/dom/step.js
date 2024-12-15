"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Step {
  constructor(string, forEachLoop, arrayAssignment, objectAssigment, conditionalBlocks, variableAssignment, variablesDeclaration) {
    this.string = string;
    this.forEachLoop = forEachLoop;
    this.arrayAssignment = arrayAssignment;
    this.objectAssigment = objectAssigment;
    this.conditionalBlocks = conditionalBlocks;
    this.variableAssignment = variableAssignment;
    this.variablesDeclaration = variablesDeclaration;
  }

  getString() {
    return this.string;
  }

  getForEachLoop() {
    return this.forEachLoop;
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

  getVariableAssignment() {
    return this.variableAssignment;
  }

  getVariablesDeclaration() {
    return this.variablesDeclaration;
  }

  resolve(context) {
    if (this.forEachLoop !== null) {
      this.forEachLoop.resolve(context);
    }

    if (this.arrayAssignment !== null) {
      this.arrayAssignment.resolve(context);
    }

    if (this.objectAssigment !== null) {
      this.objectAssigment.resolve(context);
    }

    if (this.conditionalBlocks !== null) {
      this.conditionalBlocks.resolve(context);
    }

    if (this.variableAssignment !== null) {
      this.variableAssignment.resolve(context);
    }

    if (this.variablesDeclaration !== null) {
      this.variablesDeclaration.resolve(context);
    }
  }

  static name = "Step";

  static fromStepNode(stepNode, context) {
    const { ForEachLoop, ArrayAssignment, ObjectAssigment, ConditionalBlocks, VariableAssignment, VariablesDeclaration } = dom,
          node = stepNode,  ///
          string = context.nodeAsString(node),
          forEachLoop = ForEachLoop.fromStepNode(stepNode, context),
          arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context),
          objectAssigment = ObjectAssigment.fromStepNode(stepNode, context),
          conditionalBlocks = ConditionalBlocks.fromStepNode(stepNode, context),
          variableAssignment = VariableAssignment.fromStepNode(stepNode, context),
          variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context),
          step = new Step(string, forEachLoop, arrayAssignment, objectAssigment, conditionalBlocks, variableAssignment, variablesDeclaration);

    return step;
  }
});
