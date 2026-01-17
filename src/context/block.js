"use strict";

import { arrayUtilities } from "necessary";

import Exception from "../exception";

import { chainContext } from "../utilities/context";

const { push } = arrayUtilities;

export default class BlockContext {
  constructor(context, variables) {
    this.context = context;
    this.variables = variables;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getVariables(nested = true) {
    const variables = [];

    push(variables, this.variables);

    if (nested) {
      const contextVariables = this.context.getVariables();

      push(variables, contextVariables);
    }

    return variables;
  }

  findVariableByVariableName(variableName, nested = true) {
    const variables = this.getVariables(nested),
          variable = variables.find((variable) => {
            const variableNameMatches = variable.matchVariableName(variableName);

            if (variableNameMatches) {
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

  static fromVariables(variables, context) {
    const blockContext = new BlockContext(context, variables);

    return blockContext;
  }
}
