"use strict";

import Exception from "../../exception";

import { define } from "../../elements";
import { variablesFromExpressionsAndParameters } from "../procedure";

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
      const expressionString = expression.getString(),
            message = `The ${expressionString} expression's '${expressionType}' type and the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);

    return expression;
  }

  static name = "AnonymousProcedure";
});
