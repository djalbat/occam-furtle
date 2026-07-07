"use strict";

import { Element, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { LIST_TYPE_NAME } from "../typeNames";
import { valueFromNominalValue } from "../utilities/value";

const { reduce, breakable } = continuationUtilities;

export default define(class Reduce extends Element {
  constructor(context, string, node, breakPoint, variable, inivialValue, anonymousProcedure) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.inivialValue = inivialValue;
    this.anonymousProcedure = anonymousProcedure;
  }

  getVariable() {
    return this.variable;
  }

  getInitialValue() {
    return this.inivialValue;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate = breakable(function (context, continuation) {
    const reduceString = this.getString();

    context.trace(`Evaluating the '${reduceString}' reduce...`);

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
          nominalValues = primitiveValue, ///
          inivialValue = this.inivialValue.evaluate(context);

    reduce(nominalValues, (currentValue, nominalValue, continuation) => {
      let value;

      const { Values } = elements;

      value = currentValue; ///

      const values = Values.fromValue(value, context);

      value = valueFromNominalValue(nominalValue);

      values.addValue(value);

      this.anonymousProcedure.call(values, context, continuation);
    }, inivialValue, (value) => {
      const valueString = value.getString();

      context.trace(`...evaluated the '${reduceString}' reduce as '${valueString}'.`);

      continuation(value);
    });
  });

  static name = "Reduce";
});
