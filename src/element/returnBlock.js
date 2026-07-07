"use strict";

import { Element, continuationUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { confine } from "../utilities/context";

const { forEach, unbreakable } = continuationUtilities;

export default define(class ReturnBlock extends Element {
  constructor(context, string, node, breakPoint, statements, nonsensical, returnStatement) {
    super(context, string, node, breakPoint);

    this.statements = statements;
    this.nonsensical = nonsensical;
    this.returnStatement = returnStatement;
  }

  getStatements() {
    return this.statements;
  }

  isNonsensical() {
    return this.nonsensical;
  }

  getReturnStatement() {
    return this.returnStatement;
  }

  evaluate = unbreakable(function (variables, context, continuation) {
    const returnBlockString = this.getString(); ///

    context.trace(`Evaluating the '${returnBlockString}' return block...`);

    if (this.nonsensical) {
      const message = `The return block is nonsensical.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    confine((context) => {
      this.evaluateStatements(context, () => {
        const value = this.returnStatement.evaluate(context),
              valueString = value.getString();

        context.debug(`...evaluated the '${returnBlockString}' return block as '${valueString}'.`);

        continuation(value);
      });
    }, variables, context);
  });

  evaluateStatements = unbreakable(function (context, continuation) {
    const returnBlockString = this.getString(); ///

    context.trace(`Evaluating the '${returnBlockString}' return block's statements...`);

    forEach(this.statements, (statement, continuation) => {
      statement.evaluate(context, continuation);
    }, () => {
      context.debug(`...evaluated the '${returnBlockString}' return block's statements.`);

      continuation();
    });
  });

  static name = "ReturnBlock";
});
