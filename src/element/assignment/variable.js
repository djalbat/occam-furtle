"use strict";

import Element from "../../element";

import { define } from "../../elements";

export default define(class VariableAssignment extends Element {
  constructor(context, string, node, variable, expression) {
    super(context, string, node)

    this.variable = variable;
    this.expression = expression;
  }

  getVariable() {
    return this.variable;
  }

  getExpression() {
    return this.expression;
  }

  evaluate(context) {
    let term;

    const variableAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${variableAssignmentString}' variable assignment...`);

    term = this.expression.evaluate(context);

    this.variable.assign(term, context);

    const termString = term.getString();

    context.debug(`...evaluated the '${variableAssignmentString}' variable assignment as '${termString}'.`);

    return term;
  }

  static name = "VariableAssignment";
});
