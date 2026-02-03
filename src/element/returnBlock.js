"use strict";

import Exception from "../exception";
import BlockContext from "../context/block";

import { define } from "../elements";

export default define(class ReturnBlock {
  constructor(string, steps, nonsensical, returnStatement) {
    this.string = string;
    this.steps = steps;
    this.nonsensical = nonsensical;
    this.returnStatement = returnStatement;
  }

  getString() {
    return this.string;
  }

  getSteps() {
    return this.steps;
  }

  isNonsensical() {
    return this.nonsensical;
  }

  getReturnStatement() {
    return this.returnStatement;
  }

  evaluate(variables, context) {
    if (context === undefined) {
      context = variables;  ///

      variables = [];
    }

    const returnBlockString = this.getString(); ///

    context.trace(`Evaluating the '${returnBlockString}' return block...`);

    if (this.nonsensical) {
      const message = `The return block is nonsensical.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const blockContext = BlockContext.fromVariables(variables, context);

    context = blockContext; ///

    this.steps.forEach((step) => {
      step.evaluate(context);
    });

    const term = this.returnStatement.evaluate(context),
          termString = term.getString();

    context.debug(`Evaluated... the '${returnBlockString}' return block as '${termString}'.`);

    return term;
  }

  static name = "ReturnBlock";
});
