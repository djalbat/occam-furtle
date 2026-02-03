"use strict";

import Element from "../../element";
import Exception from "../../exception";

import { define } from "../../elements";
import { variablesFromTermsAndParameters } from "../procedure";

export default define(class AnonymousProcedure extends Element {
  constructor(context, string, node, type, parameters, returnBlock) {
    super(context, string, node)

    this.type = type;
    this.parameters = parameters;
    this.returnBlock = returnBlock;
  }

  getType() {
    return this.type;
  }

  getParameters() {
    return this.parameters;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  call(terms, context) {
    const anonymousProcedureString = this.getString(); ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    this.parameters.matchTerms(terms, context);

    const variables = variablesFromTermsAndParameters(terms, this.parameters, context),
          term = this.returnBlock.evaluate(variables, context),
          termType = term.getType();

    if (this.type !== termType) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type and the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type  do not match.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);

    return term;
  }

  static name = "AnonymousProcedure";
});
