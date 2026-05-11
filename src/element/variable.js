"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { variableStringFromName } from "../utilities/string";

export default define(class Variable extends Element {
  constructor(context, string, node, breakPoint, type, name, value) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.name = name;
    this.value = value;
  }

  getType() {
    return this.type;
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }

  compareVariableName(variableName) {
    const comparesToVariableName = (this.name === variableName);

    return comparesToVariableName;
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
          value = variable.getValue(),
          valueString = value.getString();

    context.debug(`...evaluated the '${variableString}' variable as the '${valueString}' value.`);

    return value;
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
      const message = `The '${variableString} variable's '${variableType}' type does not compare to the term's '${termType}' type.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    this.term = term;

    const variable = this;  ///

    context.addVariable(variable);

    context.debug(`...assigned the '${termString}' term to the '${variableString}' variable.`);
  }

  static name = "Variable";

  static fromBinding(binding, context) {
    const type = binding.getType(),
          name = binding.getName(),
          term = null,
          variableString = variableStringFromName(name),
          string = variableString,  ///
          node = null,
          breakPoint = null

    context = null;

    const variable = new Variable(context, string, node, breakPoint, type, name, term);

    return variable;
  }

  static fromNamedBinding(namedBinding, context) {
    const aliasedName = namedBinding.getAliasedName(),
          type = namedBinding.getType(),
          name = aliasedName, ///
          term = null,
          variableString = variableStringFromName(name),
          string = variableString,  ///
          node = null,
          breakPoint = null;

    context = null;

    const variable = new Variable(context, string, node, breakPoint, type, name, term);

    return variable;
  }

  static fromValueAndParameter(value, parameter, context) {
    const type = parameter.getType(),
          name = parameter.getName(),
          variableString = variableStringFromName(name),
          string = variableString,  ///
          node = null,
          breakPoint = null;

    context = null;

    const variable = new Variable(context, string, node, breakPoint, type, name, value);

    return variable;
  }
});
