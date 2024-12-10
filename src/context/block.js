"use strict";

export default class BlockContext {
  constructor(context, variables) {
    this.context = context;
    this.variables = variables;
  }

  getContext() {
    return this.context;
  }

  getVariables() {
    return this.variables;
  }

  trace(message) { this.context.trace(message); }

  debug(message) { this.context.debug(message); }

  info(message) { this.context.info(message); }

  warning(message) { this.context.warning(message); }

  error(message) { this.context.error(message); }

  static fromParameters(parameters, context) {
    const variables = variablesFromParameters(parameters),
          blockContext = new BlockContext(context, variables);

    return blockContext;
  }
}

 function variablesFromParameters(parameters) {
   const variables = parameters.map((parameter) => {
     const variable = parameter.getVariable();

     return variable;
   });

   return variables;
 }
