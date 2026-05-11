"use strict";

import { Element } from "occam-languages";

import { define } from "../../elements";

export default define(class VariableAssignment extends Element {
  constructor(context, string, node, breakPoint, variable, expression) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.expression = expression;
  }

  getVariable() {
    return this.variable;
  }

  getExpression() {
    return this.expression;
  }

  async evaluate(context) {
    let value;

    const variableAssignmentString = this.getString(); ///

    context.trace(`Evaluating the '${variableAssignmentString}' variable assignment...`);

    value = await this.expression.evaluate(context);

    this.variable.assign(value, context);

    const valueString = value.getString();

    context.debug(`...evaluated the '${variableAssignmentString}' variable assignment as '${valueString}'.`);

    return value;
  }

  static name = "VariableAssignment";
});
