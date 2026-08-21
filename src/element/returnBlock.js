"use strict";

import { Element, continuationUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { confine } from "../utilities/context";

const { forEach } = continuationUtilities;

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

  evaluate(variables, context, back, forward) {
    const returnBlockString = this.getString(); ///

    context.trace(`Evaluating the '${returnBlockString}' return block...`);

    if (this.nonsensical) {
      const message = `The return block is nonsensical.`,
            exception = Exception.fromMessage(message);

      return back(exception);
    }

    return confine((context) => {
      return this.evaluateStatements(context, back, () => {
        return this.returnStatement.evaluate(context, back, (value) => {
          const valueString = value.getString();

          context.debug(`...evaluated the '${returnBlockString}' return block as '${valueString}'.`);

          return forward(value);
        });
      });
    }, variables, context);
  }

  evaluateStatements(context, back, forward) {
    const returnBlockString = this.getString(); ///

    context.trace(`Evaluating the '${returnBlockString}' return block's statements...`);

    return forEach(this.statements, (statement, back, forward) => {
      return statement.evaluate(context, back, forward);
    }, back, () => {
      context.debug(`...evaluated the '${returnBlockString}' return block's statements.`);

      return forward();
    });
  }

  static name = "ReturnBlock";
});
