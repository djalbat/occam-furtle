"use strict";

import Exception from "../exception";

import { define } from "../elements";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";
import { expressionsFromExpression } from "../utilities/expressions";
import { expressionFromNode, expressionFromBoolean } from "../utilities/expression";

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
      const expressionString = expression.getString(),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = expression.getNodes(),
          boolean = nodes.some((node) => {
            let expression;

            expression = expressionFromNode(node, context);

            const expressions = expressionsFromExpression(expression, context);

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

    context.trace(`...evaluated the '${someString}' some.`);

    return expression;
  }

  static name = "Some";
});
