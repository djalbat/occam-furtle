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

  getVariables(blocked = false) {
    const variables = [];

    push(variables, this.variables);

    if (!blocked) {
      const contextVariables = this.context.getVariables();

      push(variables, contextVariables);
    }

    return variables;
  }

  getFileContext() { return this.context.getFileContext(); }

  findProcedureByReference(reference) { return this.context.findProcedureByReference(reference); }

  isProcedurePresentByReference(reference) { return this.context.isProcedurePresentByReference(reference); }

  findVariableByVariableName(variableName, blocked = false) {
    const variables = this.getVariables(blocked),
          variable = variables.find((variable) => {
            const variableNameMatches = variable.matchVariableName(variableName);

            if (variableNameMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  isVariablePresentByVariableName(variableName, blocked = false) {
    const variable = this.findVariableByVariableName(variableName, blocked),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  addVariable(variable) {
    const blocked = true,
          variableName = variable.getName(),
          variableString = variable.getString(),
          variablePresent = this.isVariablePresentByVariableName(variableName, blocked);

    if (variablePresent) {
      const message = `The '${variableString}' variable is already present.'`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const context = this;

    context.trace(`Added the '${variableString}' variable to the context.`);

    this.variables.push(variable);
  }

  nodeAsString(node) { return this.context.nodeAsString(node); }

  nodesAsString(node) { return this.context.nodesAsString(node); }

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
