"use strict";

import { Element } from "occam-languages";

import Exception from "../../exception";

import { define } from "../../elements";
import { variablesFromValuesAndParameters } from "../../utilities/parameters";

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

  async call(values, context) {
    const anonymousProcedureString = this.getString(); ///

    context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);

    this.parameters.compareValues(values, context);

    const variables = variablesFromValuesAndParameters(values, this.parameters, context),
          value = await this.returnBlock.evaluate(variables, context),
          valueType = value.getType();

    if (this.type !== valueType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type is not equal to the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);

    return value;
  }

  static name = "AnonymousProcedure";
});
