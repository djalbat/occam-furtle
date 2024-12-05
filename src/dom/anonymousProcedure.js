"use strict";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const nonsenseNodesQuery = nodesQuery("/forEachLoop/anonymousProcedure/block/nonsense"),
      parameterNodesQuery = nodesQuery("/forEachLoop/anonymousProcedure/parameter");

export default domAssigned(class AnonymousProcedure {
  constructor(parameters, nonsensical, block) {
    this.paramters = parameters;
    this.nonsensical = nonsensical;
    this.block = block;
  }

  getParameters() {
    return this.paramters;
  }

  isNonsensical() {
    return this.nonsensical;
  }

  getBlock() {
    return this.block;
  }

  getString() {
    debugger
  }

  static name = "AnonymousProcedure";

  static fromForEachLoopNode(forEachLoopNode, context) {
    const { Block } = dom,
          parameters = parametersFromForEachLoopNode(forEachLoopNode, context),
          nonsensical = nonsensicalFromForEachLoopNode(forEachLoopNode, context),
          block = Block.fromForEachLoopNode(forEachLoopNode, context),
          anonymousProcedureDeclaration = new AnonymousProcedure(parameters, nonsensical, block);

    return anonymousProcedureDeclaration;
  }
});

function parametersFromForEachLoopNode(forEachLoopNode, context) {
  const { Parameter } = dom,
        parameterNodes = parameterNodesQuery(forEachLoopNode),
        parameters = parameterNodes.map((parameterNode) => {
          const parameter = Parameter.fromParameterNode(parameterNode, context);

          return parameter;
        });

  return parameters;
}

function nonsensicalFromForEachLoopNode(forEachLoopNode, context) {
  const nonsenseNodes = nonsenseNodesQuery(forEachLoopNode),
        nonsenseNodesLength = nonsenseNodes.length,
        nonsensical = (nonsenseNodesLength > 0);

  return nonsensical;
}

