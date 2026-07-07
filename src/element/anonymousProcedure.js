"use strict";

import { Element, continuationUtilities } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { variablesFromValuesAndParameters } from "../utilities/parameters";

const { unbreakable } = continuationUtilities;

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

  call = unbreakable(function (values, context, continuatino) {
    const anonymousProcedureString = this.getString(); ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous function...`);

    this.parameters.compareValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context);

    this.returnBlock.evaluate(variables, context, (value) => {
      const valueType = value.getType(),
            typeEqualToValueType = this.type.isEqualTo(valueType);

      if (!typeEqualToValueType) {
        const valueString = value.getString(),
              typeString = this.type.getString(),
              message = `The '${valueString}' value's '${valueType}' type is not equal to the '${anonymousProcedureString}' anonymous function's '${typeString}' type.`,
              exception = Exception.fromMessage(message);

        throw exception;
      }

      context.debug(`...called the '${anonymousProcedureString}' anonymous function.`);

      continuatino(value);
    });
  });

  static name = "AnonymousProcedure";
});
