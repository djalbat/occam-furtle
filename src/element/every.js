"use strict";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";
import { expressionFromNode, expressionFromBoolean } from "../utilities/expression";

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
      const expressionString = expression.getString(),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = expression.getNodes(),
          boolean = nodes.every((node) => {
            let expression;

            const { Expressions } = elements;

            expression = expressionFromNode(node, context);

            const expressions = Expressions.fromExpression(expression, context);

            expression = this.anonymousProcedure.call(expressions, context);

            const expressionType = expression.getType();

            if (expressionType !== BOOLEAN_TYPE) {
              const expressionString = expression.getString(),
                    message = `The ${expressionString} expression's type is '${expressionType}' when it should be of type '${BOOLEAN_TYPE}'.`,
                    exception = Exception.fromMessage(message);

              throw exception;
            }

            const boolean = expression.getBoolean();

            return boolean;
          });

    expression = expressionFromBoolean(boolean, context);

    context.trace(`...evaluated the '${everyString}' every.`);

    return expression;
  }

  static name = "Every";
});
