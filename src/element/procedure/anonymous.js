"use strict";

import { Element } from "occam-languages";

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

  async call(terms, context) {
    const anonymousProcedureString = this.getString(); ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    this.parameters.compareTerms(terms, context);

    const variables = variablesFromTermsAndParameters(terms, this.parameters, context),
          term = await this.returnBlock.evaluate(variables, context),
          termType = term.getType();

    if (this.type !== termType) {
      const termString = term.getString(),
            message = `The '${termString}' term's '${termType}' type is not equal to the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);

    return term;
  }

  static name = "AnonymousProcedure";
});
