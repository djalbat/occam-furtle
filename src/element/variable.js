"use strict";

import Exception from "../exception";

import { define } from "../elements";

export default define(class Variable {
  constructor(string, type, name, expression) {
    this.string = string;
    this.type = type;
    this.name = name;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getExpression() {
    return this.expression;
  }

  matchVariableName(variableName) {
    const nameMatches = (this.name === variableName);

    return nameMatches;
  }

  evaluate(context) {
    const variableString = this.string; ///

    context.trace(`Evaluating the '${variableString}' variable...`);

    const nested = true,
          variableName = this.name, ///
          variablePresent = context.isVariablePresentByVariableName(variableName, nested);

    if (!variablePresent) {
      const message = `The '${variableString}; variable is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const variable = context.findVariableByVariableName(variableName),
          expression = variable.getExpression(),
          expressionString = expression.getString();

    context.debug(`...evaluated the '${variableString}' variable to the ${expressionString} expression.`);

    return expression;
  }

  assign(expression, context) {
    const nested = false,
          expressionString = expression.getString(),
          variableName = this.name, ///
          variableString = this.string, ///
          variablePresent = context.isVariablePresentByVariableName(variableName, nested);

    context.trace(`Assigning the ${expressionString} expression to the '${variableString}' variable...`);

    if (variablePresent) {
      const message = `The '${variableString}' variable is already present.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const expressionType = expression.getType(),
          variableType = this.type;

    if (expressionType !== variableType) {
      const message = `The '${variableString} variable's '${variableType}' type does not match the expression's '${expressionType}' type.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.expression = expression;

    const variable = this;  ///

    context.addVariable(variable);

    context.debug(`...assigned the ${expressionString} expression to the '${variableString}' variable.`);
  }

  static name = "Variable";
});
