"use strict";

import dom from "../dom";
import BlockContext from "../context/block";

import { domAssigned } from "../dom";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { variablesFromValuesAndParameters } from "./procedure";

const nonsenseNodesQuery = nodesQuery("/forEachLoop/anonymousProcedure/block/nonsense"),
      parameterNodesQuery = nodesQuery("/forEachLoop/anonymousProcedure/parameters/parameter"),
      parametersNodeQuery = nodeQuery("/forEachLoop/anonymousProcedure/parameters");

export default domAssigned(class AnonymousProcedure {
  constructor(string, parameters, nonsensical, block) {
    this.string = string;
    this.parameters = parameters;
    this.nonsensical = nonsensical;
    this.block = block;
  }

  getString() {
    return this.string;
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

  call(values, context) {
    const anonymousProcedureString = this.string; ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    this.parameters.matchValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context),
          blockContext = BlockContext.fromVariables(variables, context);

    context = blockContext; ///

    this.block.resolve(context);

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);
  }

  static name = "AnonymousProcedure";

  static fromForEachLoopNode(forEachLoopNode, context) {
    const { Block, Parameters } = dom,
          string = stringFromForEachLoopNode(forEachLoopNode, context),
          parameters = Parameters.fromForEachLoopNode(forEachLoopNode, context),
          nonsensical = nonsensicalFromForEachLoopNode(forEachLoopNode, context),
          block = Block.fromForEachLoopNode(forEachLoopNode, context),
          anonymousProcedureDeclaration = new AnonymousProcedure(string, parameters, nonsensical, block);

    return anonymousProcedureDeclaration;
  }
});

function stringFromForEachLoopNode(forEachLoopNode, context) {
  const parametersNode = parametersNodeQuery(forEachLoopNode),
        parametersString = context.nodeAsString(parametersNode),
        string = `(${parametersString}) { ... }`;

  return string;
}

function nonsensicalFromForEachLoopNode(forEachLoopNode, context) {
  const nonsenseNodes = nonsenseNodesQuery(forEachLoopNode),
        nonsenseNodesLength = nonsenseNodes.length,
        nonsensical = (nonsenseNodesLength > 0);

  return nonsensical;
}
