"use strict";

import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE } from "../types";
import { variableFromExpressionAndParameter } from "../utilities/element";

export default define(class Procedure {
  constructor(string, type, label, parameters, returnBlock) {
    this.string = string;
    this.type = type;
    this.label = label;
    this.parameters = parameters;
    this.returnBlock = returnBlock;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getLabel() {
    return this.label;
  }

  getParameters() {
    return this.parameters;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  isBoolean() {
    const typeBooleanType = (this.type === BOOLEAN_TYPE),
          boolean = typeBooleanType;  ///

    return boolean;
  }

  getName() { return this.label.getName(); }

  matchName(name) { return this.label.matchName(name); }

  call(expressions, context) {
    const procedureString = this.string;  ///

    context.trace(`Calling the '${procedureString}' procedure...`);

    this.parameters.matchExpressions(expressions, context);

    const variables = variablesFromExpressionsAndParameters(expressions, this.parameters, context),
          expression = this.returnBlock.evaluate(variables, context),
          expressionType = expression.getType();

    if (this.type !== expressionType) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type and the '${procedureString}' procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${procedureString}' procedure.`);

    return expression;
  }

  static name = "Procedure";
});

export function variablesFromExpressionsAndParameters(expressions, parameters, context) {
  const variables = [];

  expressions.forEachExpression((expression, index) => {
    const parameter = parameters.getParameter(index);

    if (parameter !== null) {
      const variable = variableFromExpressionAndParameter(expression, parameter, context);

      variables.push(variable);
    }
  });

  return variables;
}
