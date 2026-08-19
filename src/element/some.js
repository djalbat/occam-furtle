"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { LIST_TYPE_NAME, BOOLEAN_TYPE_NAME } from "../typeNames";
import { valueFromBoolean, valueFromNominalValue } from "../utilities/value";

const { some } = continuationUtilities,
      { breakable } = breakPointUtilities;

export default define(class Some extends Element {
  constructor(context, string, node, breakPoint, variable, anonymousProcedure) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate = breakable(function (context, continuation) {
    const someString = this.getString();

    context.trace(`Evaluating the '${someString}' some...`);

    const value = this.variable.evaluate(context),
          valueType = value.getType(),
          valueTypeListType = valueType.isListType();

    if (!valueTypeListType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValues = primitiveValue; ///

    return some(nominalValues, (nominalValue, continuation) => {
      const { Values } = elements,
            value = valueFromNominalValue(nominalValue),
            values = Values.fromValue(value, context);

      this.anonymousProcedure.call(values, context, (value) => {
        const valueType = value.getType(),
              valueTypeBooleanType = valueType.isBooleanType();

        if (!valueTypeBooleanType) {
          const valueString = value.getString(),
                message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
                exception = Exception.fromMessage(message);

          throw exception;
        }

        const primitiveValue = value.getPrimitiveValue(),
              boolean = primitiveValue; ///

        return continuation(boolean);
      });
    }, (boolean) => {
      const value = valueFromBoolean(boolean, context),
            valueString = value.getString();

      context.trace(`...evaluated the '${someString}' some as '${valueString}'.`);

      return continuation(value);
    });
  });

  static name = "Some";
});
