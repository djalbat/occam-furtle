"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { variablesFromValuesAndParameters } from "../procedure";

const parametersNodeQuery = nodeQuery("/anonymousProcedure/parameters"),
      typeTerminalNodeQuery = nodeQuery("/anonymousProcedure/@type"),
      anonymousProcedureNodeQuery = nodeQuery("/some/anonymousProcedure");

export default domAssigned(class AnonymousProcedure {
  constructor(string, type, parameters, returnBlock) {
    this.string = string;
    this.type - type;
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
    debugger

    const anonymousProcedureString = this.string; ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    this.parameters.matchValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context);

    const value = this.returnBlock.evaluate(variables, context),
          valueType = value.getType();

    if (this.type !== valueType) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type and the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);
  }

  static name = "AnonymousProcedure";

  static fromSomeNode(someNode, context) {
    const { ReturnBlock, Parameters } = dom,
          anonymousProcedureNode = anonymousProcedureNodeQuery(someNode),
          string = stringFromAnonymousProcedureNode(anonymousProcedureNode, context),
          type = typeFromProcedureSomeNode(anonymousProcedureNode, context),
          parameters = Parameters.fromAnonymousProcedureNode(anonymousProcedureNode, context),
          returnBlock = ReturnBlock.fromAnonymousProcedureNode(anonymousProcedureNode, context),
          anonymousProcedureDeclaration = new AnonymousProcedure(string, type, parameters, returnBlock);

    return anonymousProcedureDeclaration;
  }
});

function typeFromProcedureSomeNode(someNode, context) {
  const typeTerminalNode = typeTerminalNodeQuery(someNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        type = typeTerminalNodeContent; ///

  return type;
}

function stringFromAnonymousProcedureNode(anonymousProcedureNode, context) {
  const parametersNode = parametersNodeQuery(anonymousProcedureNode),
        parametersString = context.nodeAsString(parametersNode),
        string = `(${parametersString}) { ... }`;

  return string;
}
