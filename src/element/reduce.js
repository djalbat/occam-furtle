"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { NOMINAL_VALUES_TYPE } from "../types";
import { valueFromNominalValue } from "../utilities/value";

const { asyncReduce } = asynchronousUtilities;

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

  async evaluate(context) {
    let value;

    await this.break(context);

    const reduceString = this.getString();

    context.trace(`Evaluating the '${reduceString}' reduce...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType();

    if (valueType !== NOMINAL_VALUES_TYPE) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${NOMINAL_VALUES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const primitiveValue = value.getPrimitiveValue(),
          nominalValues = primitiveValue, ///
          inivialValue = await this.inivialValue.evaluate(context);

    value = await asyncReduce(nominalValues, async (currentValue, nominalValue) => {
      let value;

      const { Values } = elements;

      value = currentValue; ///

      const values = Values.fromValue(value, context);

      value = valueFromNominalValue(nominalValue, context);

      values.addValue(value);

      value = await this.anonymousProcedure.call(values, context);

      return value;
    }, inivialValue);

    const valueString = value.getString();

    context.trace(`...evaluated the '${reduceString}' reduce as '${valueString}'.`);

    return value;
  }

  static name = "Reduce";
});
