"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { LIST_TYPE_NAME } from "../typeNames";
import { valueFromNominalValue } from "../utilities/value";

const { reduce } = continuationUtilities,
      { breakable } = breakPointUtilities;

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

  evaluate = breakable(function (context, back, forward) {
    const reduceString = this.getString();

    context.trace(`Evaluating the '${reduceString}' reduce...`);

    return this.variable.evaluate(context, back, (value) => {
      const valueType = value.getType(),
            valueTypeListType = valueType.isListType();

      if (!valueTypeListType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      const primitiveValue = value.getPrimitiveValue(),
            nominalValues = primitiveValue, ///
            inivialValue = this.inivialValue.evaluate(context);

      return reduce(nominalValues, (currentValue, nominalValue, back, forward) => {
        let value;

        const { Values } = elements;

        value = currentValue; ///

        const values = Values.fromValue(value, context);

        value = valueFromNominalValue(nominalValue);

        values.addValue(value);

        return this.anonymousProcedure.call(values, context, back, forward);
      }, inivialValue, back, (value) => {
        const valueString = value.getString();

        context.trace(`...evaluated the '${reduceString}' reduce as '${valueString}'.`);

        return forward(value);
      });
    });
  });

  static name = "Reduce";
});
