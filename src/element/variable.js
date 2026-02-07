"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { variableStringFromName } from "../utilities/string";

export default define(class Variable extends Element {
  constructor(context, string, node, type, name, term) {
    super(context, string, node)

    this.type = type;
    this.name = name;
    this.term = term;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getTerm() {
    return this.term;
  }

  matchVariableName(variableName) {
    const nameMatches = (this.name === variableName);

    return nameMatches;
  }

  evaluate(context) {
    const variableString = this.getString(); ///

    context.trace(`Evaluating the '${variableString}' variable...`);

    const nested = true,
          variableName = this.name, ///
          variablePresent = context.isVariablePresentByVariableName(variableName, nested);

    if (!variablePresent) {
      const message = `The '${variableString}' variable is not present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const variable = context.findVariableByVariableName(variableName),
          term = variable.getTerm(),
          termString = term.getString();

    context.debug(`...evaluated the '${variableString}' variable as the '${termString}' term.`);

    return term;
  }

  assign(term, context) {
    const nested = false,
          termString = term.getString(),
          variableName = this.name, ///
          variableString = this.getString(), ///
          variablePresent = context.isVariablePresentByVariableName(variableName, nested);

    context.trace(`Assigning the '${termString}' term to the '${variableString}' variable...`);

    if (variablePresent) {
      const message = `The '${variableString}' variable is already present.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const termType = term.getType(),
          variableType = this.type;

    if (termType !== variableType) {
      const message = `The '${variableString} variable's '${variableType}' type does not match the term's '${termType}' type.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.term = term;

    const variable = this;  ///

    context.addVariable(variable);

    context.debug(`...assigned the '${termString}' term to the '${variableString}' variable.`);
  }

  static name = "Variable";

  static fromParameter(parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          term = null,
          variableString = variableStringFromName(name),
          string = variableString,  ///
          node = null;

    context = null;

    const variable = new Variable(context, string, node, type, name, term);

    return variable;
  }

  static fromNamedParameter(namedParameter, context) {
    const aliasedName = namedParameter.getAliasedName(),
          type = namedParameter.getType(),
          name = aliasedName, ///
          term = null,
          variableString = variableStringFromName(name),
          string = variableString,  ///
          node = null;

    context = null;

    const variable = new Variable(context, string, node, type, name, term);

    return variable;
  }

  static fromTermAndParameter(term, parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          variableString = variableStringFromName(name),
          string = variableString,  ///
          node = null;

    context = null;

    const variable = new Variable(context, string, node, type, name, term);

    return variable;
  }
});
