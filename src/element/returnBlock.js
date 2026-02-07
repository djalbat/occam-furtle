"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";
import BlockContext from "../context/block";

import { define } from "../elements";
import { asyncForEach } from "../utilities/asynchronous";

export default define(class ReturnBlock extends Element {
  constructor(context, string, node, steps, nonsensical, returnStatement) {
    super(context, string, node)

    this.steps = steps;
    this.nonsensical = nonsensical;
    this.returnStatement = returnStatement;
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

  async evaluate(variables, context) {
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

    await asyncForEach(this.steps, async (step) => {
      await step.evaluate(context);
    });

    const term = this.returnStatement.evaluate(context),
          termString = term.getString();

    context.debug(`Evaluated... the '${returnBlockString}' return block as '${termString}'.`);

    return term;
  }

  static name = "ReturnBlock";
});
