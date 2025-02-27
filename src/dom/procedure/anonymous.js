"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";
import { variablesFromValuesAndParameters } from "../procedure";

const nonsenseNodesQuery = nodesQuery("/some/anonymousProcedure/returnBlock/nonsense"),
      parametersNodeQuery = nodeQuery("/some/anonymousProcedure/parameters");

export default domAssigned(class AnonymousProcedure {
  constructor(string, parameters, nonsensical, returnBlock) {
    this.string = string;
    this.parameters = parameters;
    this.nonsensical = nonsensical;
    this.returnBlock = returnBlock;
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

  getReturnBlock() {
    return this.returnBlock;
  }

  call(values, context) {
    debugger

    const anonymousProcedureString = this.string; ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    if (this.nonsensical) {
      const message = `The '${anonymousProcedureString}' anonymous procedure is nonsensical.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.parameters.matchValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context);

    this.returnBlock.evaluate(variables, context);

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);
  }

  static name = "AnonymousProcedure";

  static fromSomeNode(someNode, context) {
    const { ReturnBlock, Parameters } = dom,
          string = stringFromSomeNode(someNode, context),
          parameters = Parameters.fromSomeNode(someNode, context),
          nonsensical = nonsensicalFromSomeNode(someNode, context),
          returnBlock = ReturnBlock.fromSomeNode(someNode, context),
          anonymousProcedureDeclaration = new AnonymousProcedure(string, parameters, nonsensical, returnBlock);

    return anonymousProcedureDeclaration;
  }
});

function stringFromSomeNode(someNode, context) {
  const parametersNode = parametersNodeQuery(someNode),
        parametersString = context.nodeAsString(parametersNode),
        string = `(${parametersString}) { ... }`;

  return string;
}

function nonsensicalFromSomeNode(someNode, context) {
  const nonsenseNodes = nonsenseNodesQuery(someNode),
        nonsenseNodesLength = nonsenseNodes.length,
        nonsensical = (nonsenseNodesLength > 0);

  return nonsensical;
}
