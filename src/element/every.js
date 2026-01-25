"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { nodeQuery } from "../utilities/query";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";

const expressionEveryNodeQuery = nodeQuery("/expression/every");

export default define(class Every {
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

    const everyString = this.getString();

    context.trace(`Evaluating the '${everyString}' every...`);

    expression = this.variable.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== NODES_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = expression.getNodes(),
          boolean = nodes.every((node) => {
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

    context.trace(`...evaluated the '${everyString}' every.`);

    return expression;
  }

  static name = "Every";

  static fromExpressionNode(expressionNode, context) {
    let every = null;

    const expressionEveryNode = expressionEveryNodeQuery(expressionNode);

    if (expressionEveryNode !== null) {
      const everyNode = expressionEveryNode; ///

      every = everyFromEveryNode(everyNode, context);
    }

    return every;
  }
});

function everyFromEveryNode(everyNode, context) {
  const { Every, Variable, AnonymousProcedure } = elements,
        anonymousProcedure = AnonymousProcedure.fromEveryNode(everyNode, context),
        variable = Variable.fromEveryNode(everyNode, context),
        string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context),
        every = new Every(string, variable, anonymousProcedure);

  return every;
}

function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
  const variableString = variable.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        string = `Every(${variableString}, ${anonymousProcedureString}) `;

  return string;
}
