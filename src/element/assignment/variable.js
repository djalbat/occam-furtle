"use strict";

import { define } from "../../elements";

export default define(class VariableAssignment {
  constructor(string, variable, expression) {
    this.string = string;
    this.variable = variable;
    this.expression = expression;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getExpression() {
    return this.expression;
  }

  evaluate(context) {
    let term;

    const variableAssignmentString = this.string; ///

    context.trace(`Evaluating the '${variableAssignmentString}' variable assignment...`);

    term = this.expression.evaluate(context);

    this.variable.assign(term, context);

    context.debug(`...evaluated the '${variableAssignmentString}' variable assignment.`);

    return term;
  }

  static name = "VariableAssignment";
});
