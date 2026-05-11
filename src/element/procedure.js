"use strict";

import { Element } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { BOOLEAN_TYPE } from "../types";
import { valuesFromNominalValues } from "../utilities/values";

export default define(class Procedure extends Element {
  constructor(context, string, node, breakPoint, type, label, parameters, returnBlock) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.label = label;
    this.parameters = parameters;
    this.returnBlock = returnBlock;
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

  compareProcedureName(procedureName) { return this.label.compareProcedureName(procedureName); }

  async call(values, context) {
    await this.break(context);

    const procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' procedure...`);

    this.parameters.compareValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context),
          term = await this.returnBlock.evaluate(variables, context),
          termType = term.getType();

    if (this.type !== termType) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type is not equal to the '${procedureString}' procedure's '${this.type}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${procedureString}' procedure.`);

    return term;
  }

  async callNominally(nominalValues) {
    const context = this.getContext();

    await this.break(context);

    const procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' procedure nominally...`);

    const values = valuesFromNominalValues(nominalValues),
          term = await this.call(values, context);

    context.debug(`...called the '${procedureString}' procedure nominally.`);

    return term;
  }

  static name = "Procedure";
});

export function variablesFromValuesAndParameters(values, parameters, context) {
  const variables = [];

  values.forEachValue((value, index) => {
    const parameter = parameters.getParameter(index);

    if (parameter !== null) {
      const { Variable } = elements,
            variable = Variable.fromValueAndParameter(value, parameter, context);

      variables.push(variable);
    }
  });

  return variables;
}
