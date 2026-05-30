"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { LIST_TYPE_NAME, BOOLEAN_TYPE_NAME } from "../typeNames";
import { valueFromBoolean, valueFromNominalValue } from "../utilities/value";

const { asyncSome } = asynchronousUtilities;

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

  async evaluate(context) {
    let value;

    await this.break(context);

    const someString = this.getString();

    context.trace(`Evaluating the '${someString}' some...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType(),
          valueTypeListType = valueType.isListType();

    if (!valueTypeListType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValues = primitiveValue, ///
          boolean = await asyncSome(nominalValues, async (nominalValue) => {
            let value;

            value = valueFromNominalValue(nominalValue);

            const { Values } = elements,
                  values = Values.fromValue(value, context);

            value = await this.anonymousProcedure.call(values, context);

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

            return boolean;
          });

    value = valueFromBoolean(boolean, context);

    const valueString = value.getString();

    context.trace(`...evaluated the '${someString}' some as '${valueString}'.`);

    return value;
  }

  static name = "Some";
});
