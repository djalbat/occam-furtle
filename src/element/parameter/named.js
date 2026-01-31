"use strict";

import Exception from "../../exception";

import { define } from "../../elements";

export default define(class NamedParameter {
  constructor(string, type, name, asName) {
    this.string = string;
    this.type = type;
    this.name = name;
    this.asName = asName;
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

  getAsName() {
    return this.asName;
  }

  matchExpression(expression, context) {
    const expressionString = expression.getString(),
          namedParameterString = this.string;  ///

    context.trace(`Matching the ${expressionString} expression against the '${namedParameterString}' named parameter...`);

    const expressionType = expression.getType();

    if (this.type !== expressionType) {
      const message = `The ${expressionString} expression's '${expressionType}' type  and '${namedParameterString}' named parameter's '${this.type}' type do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...matched the ${expressionString} expression against the '${namedParameterString}' named parameter.`);
  }

  matchNamedParameter(namedParameter, context) {
    let namedParameterMatches;

    const namedParameterA = this,  ///
          namedParameterB = namedParameter; ///

    const namedParameterAString = namedParameterA.getString(),
          namedParameterBString = namedParameterB.getString();

    context.trace(`Matching the '${namedParameterAString}' named parameter against the '${namedParameterBString}' named parameter...`);

    const name = namedParameter.getName(),
          type = namedParameter.getType();

    namedParameterMatches = ((this.name === name) && (this.type === type));

    if (namedParameterMatches) {
      context.debug(`...matched the '${namedParameterAString}' named parameter against the '${namedParameterBString}' named parameter.`);
    }

    return namedParameterMatches;
  }

  static name = "NamedParameter";
});
