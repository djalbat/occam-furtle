"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE } from "../types";

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

  getReturnStatement() { return this.returnBlock.getReturnStatement(); }

  matchName(name) { return this.label.matchName(name); }

  call(terms, context) {
    const procedureString = this.string;  ///

    context.trace(`Calling the '${procedureString}' procedure...`);

    this.parameters.matchTerms(terms, context);

    const variables = variablesFromTermsAndParameters(terms, this.parameters, context),
          term = this.returnBlock.evaluate(variables, context),
          termType = term.getType();

    if (this.type !== termType) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type and the '${procedureString}' procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${procedureString}' procedure.`);

    return term;
  }

  static name = "Procedure";
});

export function variablesFromTermsAndParameters(terms, parameters, context) {
  const variables = [];

  terms.forEachTerm((term, index) => {
    const parameter = parameters.getParameter(index);

    if (parameter !== null) {
      const { Variable } = elements,
            variable = Variable.fromTermAndParameter(term, parameter, context);

      variables.push(variable);
    }
  });

  return variables;
}
