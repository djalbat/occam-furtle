"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class VariableAssignment {
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
    let expression;

    const variableAssignmentString = this.string; ///

    context.trace(`Evaluating the '${variableAssignmentString}' variable assignment...`);

    expression = this.expression.evaluate(context);

    this.variable.assign(expression, context);

    context.debug(`...evaluated the '${variableAssignmentString}' variable assignment.`);

    return expression;
  }

  static name = "VariableAssignment";

  static fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    const variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);

    return variableAssignment;
  }
});

function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
  const { Variable, Expression, VariableAssignment } = dom,
        expression = Expression.fromVariableAssignmentNode(variableAssignmentNode, context),
        variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context),
        string = stringFromExpressionAndVariable(expression, variable, context),
        assignment = new VariableAssignment(string, variable, expression);

  return assignment;
}

function stringFromExpressionAndVariable(expression, variable, context) {
  const variableString = variable.getString(),
        expressionString = expression.asString(context),
        string = `${variableString} = ${expressionString};`;

  return string;
}
