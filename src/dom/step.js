"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";

export default domAssigned(class Step {
  constructor(string, forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration) {
    this.string = string;
    this.forEachLoop = forEachLoop;
    this.arrayAssignment = arrayAssignment;
    this.conditionalBlock = conditionalBlock;
    this.objectAssigment = objectAssigment;
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

  resolve(context) {
    if (this.forEachLoop !== null) {
      this.forEachLoop.resolve(context);
    }

    if (this.arrayAssignment !== null) {
      this.arrayAssignment.resolve(context);
    }

    if (this.conditionalBlock !== null) {
      this.conditionalBlock.resolve(context);
    }

    if (this.objectAssigment !== null) {
      this.objectAssigment.resolve(context);
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
    const { ForEachLoop, ArrayAssignment, ConditionalBlock, ObjectAssigment, VariableAssignment, VariablesDeclaration } = dom,
          node = stepNode,  ///
          string = context.nodeAsString(node),
          forEachLoop = ForEachLoop.fromStepNode(stepNode, context),
          arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context),
          conditionalBlock = ConditionalBlock.fromStepNode(stepNode, context),
          objectAssigment = ObjectAssigment.fromStepNode(stepNode, context),
          variableAssignment = VariableAssignment.fromStepNode(stepNode, context),
          variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context),
          step = new Step(string, forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration);

    return step;
  }
});
