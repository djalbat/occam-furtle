"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const forEachLoopNodeQuery = nodeQuery("/step/forEachLoop");

export default domAssigned(class ForEachLoop {
  constructor(variable, anonymousFunction) {
    this.variable = variable;
    this.anonymousFunction = anonymousFunction;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousFunction() {
    return this.anonymousFunction;
  }

  getString() {
    debugger
  }

  static name = "ForEachLoop";

  static fromStepNode(stepNode, context) {
    let forEachLoop = null;

    const forEachLoopNode = forEachLoopNodeQuery(stepNode);

    if (forEachLoopNode !== null) {
      const { Variable, AnonymousFunction } = dom,
            variable = Variable.fromForEachLoopNode(forEachLoopNode, context),
            anonymousFunction = AnonymousFunction.fromForEachLoopNode(forEachLoopNode, context);

      forEachLoop = new ForEachLoop(variable, anonymousFunction);
    }

    return forEachLoop;
  }
});
