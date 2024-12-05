"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const forEachLoopNodeQuery = nodeQuery("/step/forEachLoop");

export default domAssigned(class ForEachLoop {
  constructor(variable, anonymousProcedure) {
    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  getString() {
    debugger
  }

  static name = "ForEachLoop";

  static fromStepNode(stepNode, context) {
    let forEachLoop = null;

    const forEachLoopNode = forEachLoopNodeQuery(stepNode);

    if (forEachLoopNode !== null) {
      const { Variable, AnonymousProcedure } = dom,
            variable = Variable.fromForEachLoopNode(forEachLoopNode, context),
            anonymousProcedure = AnonymousProcedure.fromForEachLoopNode(forEachLoopNode, context);

      forEachLoop = new ForEachLoop(variable, anonymousProcedure);
    }

    return forEachLoop;
  }
});
