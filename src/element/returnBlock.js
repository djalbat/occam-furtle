"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { confine } from "../utilities/context";

const { asyncForEach } = asynchronousUtilities;

export default define(class ReturnBlock extends Element {
  constructor(context, string, node, breakPoint, steps, nonsensical, returnStatement) {
    super(context, string, node, breakPoint);

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

    let value;

    await confine(async (context) => {
      await asyncForEach(this.steps, async (step) => {
        await step.evaluate(context);
      });

      value = this.returnStatement.evaluate(context);
    }, variables, context);

    const valueString = value.getString();

    context.debug(`Evaluated the '${returnBlockString}' return block as '${valueString}'.`);

    return value;
  }

  static name = "ReturnBlock";
});
