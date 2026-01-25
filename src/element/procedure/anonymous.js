"use strict";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { nodeQuery } from "../../utilities/query";
import { variablesFromExpressionsAndParameters } from "../procedure";

const typeTerminalNodeQuery = nodeQuery("/anonymousProcedure/@type"),
      someAnonymousProcedureNodeQuery = nodeQuery("/some/anonymousProcedure"),
      everyAnonymousProcedureNodeQuery = nodeQuery("/every/anonymousProcedure"),
      reduceAnonymousProcedureNodeQuery = nodeQuery("/reduce/anonymousProcedure");

export default define(class AnonymousProcedure {
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

  call(expressions, context) {
    const anonymousProcedureString = this.string; ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    this.parameters.matchExpressions(expressions, context);

    const variables = variablesFromExpressionsAndParameters(expressions, this.parameters, context),
          expression = this.returnBlock.evaluate(variables, context),
          expressionType = expression.getType();

    if (this.type !== expressionType) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type and the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);

    return expression;
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
});

function anonymousProcedureFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const { Parameters, ReturnBlock, AnonymousProcedure } = elements,
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
