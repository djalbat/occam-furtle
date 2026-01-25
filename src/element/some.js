"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";

const expressionSomeNodeQuery = nodeQuery("/expression/some");

export default define(class Some {
  constructor(string, variable, anonymousProcedure) {
    this.string = string;
    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate(context) {
    let expression;

    const someString = this.getString();

    context.trace(`Evaluating the '${someString}' some...`);

    expression = this.variable.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== NODES_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = expression.getNodes(),
          boolean = nodes.some((node) => {
            let expression;

            const { Expression, Expressions } = elements;

            expression = Expression.fromNode(node, context);

            const expressions = Expressions.fromExpression(expression, context);

            expression = this.anonymousProcedure.call(expressions, context);

            const expressionType = expression.getType();

            if (expressionType !== BOOLEAN_TYPE) {
              const expressionString = expression.asString(context),
                    message = `The ${expressionString} expression's type is '${expressionType}' when it should be of type '${BOOLEAN_TYPE}'.`,
                    exception = Exception.fromMessage(message);

              throw exception;
            }

            const boolean = expression.getBoolean();

            return boolean;
          });

    const { Expression } = elements;

    expression = Expression.fromBoolean(boolean, context);

    context.trace(`...evaluated the '${someString}' some.`);

    return expression;
  }

  static name = "Some";

  static fromExpressionNode(expressionNode, context) {
    let some = null;

    const expressionSomeNode = expressionSomeNodeQuery(expressionNode);

    if (expressionSomeNode !== null) {
      const someNode = expressionSomeNode; ///

      some = someFromSomeNode(someNode, context);
    }

    return some;
  }
});

function someFromSomeNode(someNode, context) {
  const { Some, Variable, AnonymousProcedure } = elements,
        anonymousProcedure = AnonymousProcedure.fromSomeNode(someNode, context),
        variable = Variable.fromSomeNode(someNode, context),
        string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context),
        some = new Some(string, variable, anonymousProcedure);

  return some;
}

function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
  const variableString = variable.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        string = `Some(${variableString}, ${anonymousProcedureString}) `;

  return string;
}
