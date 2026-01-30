"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";
import { NODES_TYPE } from "../types";

const expressionReduceNodeQuery = nodeQuery("/expression/reduce");

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

      const { Expression, Expressions } = elements;

      expression = currentExpression; ///

      const expressions = Expressions.fromExpression(expression, context);

      expression = Expression.fromNode(node, context);

      expressions.addExpression(expression);

      expression = this.anonymousProcedure.call(expressions, context);

      return expression;
    }, initialExpression);

    context.trace(`...evaluated the '${reduceString}' reduce.`);

    return expression;
  }

  static name = "Reduce";

  static fromExpressionNode(expressionNode, context) {
    let reduce = null;

    const expressionReduceNode = expressionReduceNodeQuery(expressionNode);

    if (expressionReduceNode !== null) {
      const reduceNode = expressionReduceNode; ///

      reduce = reduceFromReduceNode(reduceNode, context);
    }

    return reduce;
  }
});

function reduceFromReduceNode(reduceNode, context) {
  const { Reduce, Variable, Expression, AnonymousProcedure } = elements,
        expression = Expression.fromReduceNode(reduceNode, context),
        variable = Variable.fromReduceNode(reduceNode, context),
        initialExpression = expression, ///
        anonymousProcedure = anonymousProcedureFromReduceNode(reduceNode, context),
        string = stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure),
        reduce = new Reduce(string, variable, initialExpression, anonymousProcedure);

  return reduce;
}

function stringFromVariableInitialExpressionAndAnonymousProcedure(variable, initialExpression, anonymousProcedure) {
  const variableString = variable.getString(),
        initialExpressionString = initialExpression.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        string = `Reduce(${variableString}, ${anonymousProcedureString}, ${initialExpressionString})`;

  return string;
}
