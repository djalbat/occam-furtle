"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { valuesFromNominalValues } from "../utilities/values";
import { variablesFromValuesAndParameters } from "../utilities/parameters";

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

  getName() { return this.label.getName(); }

  isBooleanType() { return this.type.isBooleanType(); }

  getReturnStatement() { return this.returnBlock.getReturnStatement(); }

  compareProcedureName(procedureName) { return this.label.compareProcedureName(procedureName); }

  async call(values, context) {
    await this.break(context);

    const procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' procedure...`);

    this.parameters.compareValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context),
          value = await this.returnBlock.evaluate(variables, context),
          valueType = value.getType(),
          typeEqualToValueType = this.type.isEqualTo(valueType);

    if (!typeEqualToValueType) {
      const valueString = value.getString(),
            typeString = this.type.getString(),
            message = `The '${valueString}' value's '${typeString}' type is not equal to the '${procedureString}' procedure's '${typeString}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${procedureString}' procedure.`);

    return value;
  }

  async callNominally(nominalValues) {
    const context = this.getContext();

    await this.break(context);

    const procedureString = this.getString();  ///

    context.trace(`Calling the '${procedureString}' procedure nominally...`);

    const values = valuesFromNominalValues(nominalValues, context),
          term = await this.call(values, context);

    context.debug(`...called the '${procedureString}' procedure nominally.`);

    return term;
  }

  static name = "Procedure";
});
