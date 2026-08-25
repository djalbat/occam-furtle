"use strict";

import { Element, continuationUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { variablesFromValuesAndParameters } from "../utilities/parameters";

const { cut } = continuationUtilities;

export default define(class AnonymousProcedure extends Element {
  constructor(context, string, node, breakPoint, type, parameters, returnBlock) {
    super(context, string, node, breakPoint);

    this.type = type;
    this.parameters = parameters;
    this.returnBlock = returnBlock;
  }

  getType() {
    return this.type;
  }

  getParameters() {
    return this.parameters;
  }

  getReturnBlock() {
    return this.returnBlock;
  }

  call(values, context, forward, back) {
    forward = cut(forward, back); ///

    const anonymousProcedureString = this.getString(); ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous function...`);

    return this.parameters.compareValues(values, context, (back) => {
      const variables = variablesFromValuesAndParameters(values, this.parameters, context);

      return this.returnBlock.evaluate(variables, context, (value, back) => {
        const valueType = value.getType(),
              typeEqualToValueType = this.type.isEqualTo(valueType);

        if (!typeEqualToValueType) {
          const typeString = this.type.getString(),
                valueString = value.getString(),
                valueTypeString = valueType.getString(),
                message = `The '${valueString}' value's '${valueTypeString}' type is not equal to the '${anonymousProcedureString}' anonymous function's '${typeString}' type.`,
                exception = Exception.fromMessage(message);

          return back(exception);
        }

        context.debug(`...called the '${anonymousProcedureString}' anonymous function.`);

        return forward(value, back);
      }, back);
    }, back);
  }

  static name = "AnonymousProcedure";
});
