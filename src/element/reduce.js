"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { NODES_TYPE } from "../types";
import { expressionFromNode } from "../utilities/element";

export default define(class Reduce {
  constructor(string, variable, initialExpression, anonymousProcedure) {
    this.string = string;
    this.variable = variable;
    this.initialExpression = initialExpression;
    this.anonymousProcedure = anonymousProcedure;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getInitialExpression() {
    return this.initialExpression;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate(context) {
    let expression;

    const reduceString = this.getString();

    context.trace(`Evaluating the '${reduceString}' reduce...`);

    expression = this.variable.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== NODES_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = expression.getNodes(),
          initialExpression = this.initialExpression.evaluate(context);

    expression = nodes.reduce((currentExpression, node) => {
      let expression;

      const { Expressions } = elements;

      expression = currentExpression; ///

      const expressions = Expressions.fromExpression(expression, context);

      expression = expressionFromNode(node, context);

      expressions.addExpression(expression);

      expression = this.anonymousProcedure.call(expressions, context);

      return expression;
    }, initialExpression);

    context.trace(`...evaluated the '${reduceString}' reduce.`);

    return expression;
  }

  static name = "Reduce";
});
