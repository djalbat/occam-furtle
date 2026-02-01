"use strict";

import Exception from "../exception";

import { define } from "../elements";
import { variableStringFromName } from "../utilities/string";

export default define(class Variable {
  constructor(string, type, name, prmitive) {
    this.string = string;
    this.type = type;
    this.name = name;
    this.prmitive = prmitive;
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

  getPrimitive() {
    return this.prmitive;
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
          prmitive = variable.getExpression(),
          prmitiveString = prmitive.getString();

    context.debug(`...evaluated the '${variableString}' variable to the '${prmitiveString}' prmitive.`);

    return prmitive;
  }

  assign(prmitive, context) {
    const nested = false,
          prmitiveString = prmitive.getString(),
          variableName = this.name, ///
          variableString = this.string, ///
          variablePresent = context.isVariablePresentByVariableName(variableName, nested);

    context.trace(`Assigning the '${prmitiveString}' prmitive to the '${variableString}' variable...`);

    if (variablePresent) {
      const message = `The '${variableString}' variable is already present.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const prmitiveType = prmitive.getType(),
          variableType = this.type;

    if (prmitiveType !== variableType) {
      const message = `The '${variableString} variable's '${variableType}' type does not match the prmitive's '${prmitiveType}' type.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.prmitive = prmitive;

    const variable = this;  ///

    context.addVariable(variable);

    context.debug(`...assigned the '${prmitiveString}' prmitive to the '${variableString}' variable.`);
  }

  static name = "Variable";

  static fromParameter(parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          prmitive = null,
          variableString = variableStringFromName(name),
          string = variableString,  ///
          variable = new Variable(string, type, name, prmitive);

    return variable;
  }

  static fromNamedParameter(namedParameter, context) {
    const aliasedName = namedParameter.getAliasedName(),
          type = namedParameter.getType(),
          name = aliasedName, ///
          prmitive = null,
          variableString = variableStringFromName(name),
          string = variableString,  ///
          variable = new Variable(string, type, name, prmitive);

    return variable;
  }

  static fromPrimitiveAndParameter(primitive, parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          variableString = variableStringFromName(name),
          string = variableString,  ///
          variable = new Variable(string, type, name, prmitive);

    return variable;
  }
});
