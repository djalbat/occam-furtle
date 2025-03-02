"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { variablesFromValuesAndParameters } from "../procedure";

const parametersNodeQuery = nodeQuery("/anonymousProcedure/parameters"),
      typeTerminalNodeQuery = nodeQuery("/anonymousProcedure/@type"),
      someAnonymousProcedureNodeQuery = nodeQuery("/some/anonymousProcedure"),
      everyAnonymousProcedureNodeQuery = nodeQuery("/every/anonymousProcedure"),
      reduceAnonymousProcedureNodeQuery = nodeQuery("/reduce/anonymousProcedure"),
      anonymousProcedureCallAnonymousProcedureNodeQuery = nodeQuery("/anonymousProcedureCall/anonymousProcedure");

export default domAssigned(class AnonymousProcedure {
  constructor(string, type, parameters, returnBlock) {
    this.string = string;
    this.type = type;
    this.parameters = parameters;
    this.returnBlock = returnBlock;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getParameters() {
    return this.paramters;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  call(values, context) {
    const anonymousProcedureString = this.string; ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    this.parameters.matchValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context),
          value = this.returnBlock.evaluate(variables, context),
          valueType = value.getType();

    if (this.type !== valueType) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type and the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);

    return value;
  }

  static name = "AnonymousProcedure";

  static fromSomeNode(someNode, context) {
    const someAnonymousProcedureNode = someAnonymousProcedureNodeQuery(someNode),
          anonymousProcedureNode = someAnonymousProcedureNode,  ///
          anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

    return anonymousProcedure;
  }

  static fromEveryNode(everyNode, context) {
    const everyAnonymousProcedureNode = everyAnonymousProcedureNodeQuery(everyNode),
          anonymousProcedureNode = everyAnonymousProcedureNode,  ///
          anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

    return anonymousProcedure;
  }

  static fromReduceNode(reduceNode, context) {
    const reduceAnonymousProcedureNode = reduceAnonymousProcedureNodeQuery(reduceNode),
          anonymousProcedureNode = reduceAnonymousProcedureNode,  ///
          anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

    return anonymousProcedure;
  }

  static fromAnonymousProcedureCallNode(anonymousProcedureCallNode, context) {
    const anonymousProcedureCallAnonymousProcedureNode = anonymousProcedureCallAnonymousProcedureNodeQuery(anonymousProcedureCallNode),
          anonymousProcedureNode = anonymousProcedureCallAnonymousProcedureNode,  ///
          anonymousProcedure = anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context);

    return anonymousProcedure;
  }
});

function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const { Parameters, ReturnBlock, AnonymousProcedure } = dom,
        returnBlock = ReturnBlock.fromAnonymousProcedureNode(anonymousProcedureNode, context),
        parameters = Parameters.fromAnonymousProcedureNode(anonymousProcedureNode, context),
        type = typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context),
        string = stringFromTypeParametersAndReturnBlock(type, parameters, returnBlock, context),
        anonymousProcedure = new AnonymousProcedure(string, type, parameters, returnBlock);

  return anonymousProcedure;
}

function stringFromTypeParametersAndReturnBlock(type, parameters, returnBlock, context) {
  const typeString = type,  ///
        parametersString = parameters.getString(),
        returnBlockString = returnBlock.getString(),
        string = `${typeString} (${parametersString}) ${returnBlockString}`;

  return string;
}

function typeFromProcedureAnonymousProcedureNode(anonymousProcedureNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(anonymousProcedureNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}
