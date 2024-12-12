"use strict";

import { arrayUtilities } from "necessary";

import Exception from "../exception";

const { push } = arrayUtilities;

export default class BlockContext {
  constructor(context, variables) {
    this.context = context;
    this.variables = variables;
  }

  getContext() {
    return this.context;
  }

  getVariables() {
    const variables = [];

    push(variables, this.variables);

    const contextVariables = this.context.getVariables();

    push(variables, contextVariables);

    return variables;
  }

  findProcedureByReference(reference) { return this.context.findProcedureByReference(reference); }

  findVariableByVariableName(variableName) {
    const variables = this.getVariables(),
          variable = variables.find((variable) => {
            const variableNameMatches = variable.matchVariableName(variableName);

            if (variableNameMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  addVariable(variable) {
    const variableA = variable; ///

    this.variables.forEach((variable) => {
      const variableB = variable, ///
            variableAName = variableA.getName(),
            variableANameMatchesVariableBName = variableB.matchVariableName(variableAName);

      if (variableANameMatchesVariableBName) {
        const variableString = variable.getString(),
              message = `The '${variableString}' variable is already in the context.'`,
              exception = Exception.fromMessage(message);

        throw exception;
      }
    });

    const context = this,
          variableString = variable.getString();

    context.trace(`Added the '${variableString}' variable to the context.`);

    this.variables.push(variable);
  }

  nodeAsString(node) { return this.context.nodeAsString(node); }

  trace(message) { this.context.trace(message); }

  debug(message) { this.context.debug(message); }

  info(message) { this.context.info(message); }

  warning(message) { this.context.warning(message); }

  error(message) { this.context.error(message); }

  static fromVariables(variables, context) {
    const blockContext = new BlockContext(context, variables);

    return blockContext;
  }
}
