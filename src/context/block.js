"use strict";

import { Context } from "occam-languages";
import { arrayUtilities } from "necessary";

import Exception from "../exception";

const { push } = arrayUtilities;

export default class BlockContext extends Context {
  constructor(context, variables) {
    super(context);

    this.variables = variables;
  }

  getVariables(nested = true) {
    const variables = [];

    push(variables, this.variables);

    if (nested) {
      const context = this.getContext(),
            contextVariables = context.getVariables();

      push(variables, contextVariables);
    }

    return variables;
  }

  addVariable(variable) {
    const nested = false,
          variableName = variable.getName(),
          variableString = variable.getString(),
          variablePresent = this.isVariablePresentByVariableName(variableName, nested);

    if (variablePresent) {
      const message = `The '${variableString}' variable is already present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const context = this; ///

    context.trace(`Added the '${variableString}' variable to the context.`);

    this.variables.push(variable);
  }

  findProcedureByProcedureName(procedureName) {
    const context = this.getContext(),
          procedure = context.findProcedureByProcedureName(procedureName);

    return procedure;
  }

  isProcedurePresentByProcedureName(procedureName) {
    const context = this.getContext(),
          procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

    return procedurePresent;
  }

  findVariableByVariableName(variableName, nested = true) {
    const variables = this.getVariables(nested),
          variable = variables.find((variable) => {
            const variableComparesToVariableName = variable.compareVariableName(variableName);

            if (variableComparesToVariableName) {
              return true;
            }
          }) || null;

    return variable;
  }

  isVariablePresentByVariableName(variableName, nested = true) {
    const variable = this.findVariableByVariableName(variableName, nested),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  static fromVariables(variables, context) {
    const blockContext = Context.fromNothing(BlockContext, variables, context)

    return blockContext;
  }
}
