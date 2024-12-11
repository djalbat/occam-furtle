"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const forEachLoopNodeQuery = nodeQuery("/step/forEachLoop");

export default domAssigned(class ForEachLoop {
  constructor(string, variable, anonymousProcedure) {
    this.string = string;
    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  static name = "ForEachLoop";

  static fromStepNode(stepNode, context) {
    let forEachLoop = null;

    const forEachLoopNode = forEachLoopNodeQuery(stepNode);

    if (forEachLoopNode !== null) {
      const { Variable, AnonymousProcedure } = dom,
            node = forEachLoopNode, ///
            string = context.nodeAsString(node),  ///
            variable = Variable.fromForEachLoopNode(forEachLoopNode, context),
            anonymousProcedure = AnonymousProcedure.fromForEachLoopNode(forEachLoopNode, context);

      forEachLoop = new ForEachLoop(string, variable, anonymousProcedure);
    }

    return forEachLoop;
  }
});
