"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { LIST_TYPE_NAME } from "../typeNames";
import { valueFromNominalValue } from "../utilities/value";

const { reduce } = continuationUtilities,
      { unbreakable } = breakPointUtilities;

export default define(class Reduce extends Element {
  constructor(context, string, node, breakPoint, variable, initialValue, anonymousProcedure) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.initialValue = initialValue;
    this.anonymousProcedure = anonymousProcedure;
  }

  getVariable() {
    return this.variable;
  }

  getInitialValue() {
    return this.initialValue;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate = unbreakable(function (context, forward, back) {
    const reduceString = this.getString();

    context.trace(`Evaluating the '${reduceString}' function...`);

    return this.variable.evaluate(context, (value, back) => {
      const valueType = value.getType(),
            valueTypeListType = valueType.isListType();

      if (!valueTypeListType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      const primitiveValue = value.getPrimitiveValue(),
            nominalValues = primitiveValue; ///

      return this.initialValue.evaluate(context, (initialValue, back) => {
        return reduce(nominalValues, (currentValue, nominalValue, forward, back) => {
          return this.evaluateAnonymousProcedure(currentValue, nominalValue, context, forward, back);
        }, initialValue, (value, back) => {
          const valueString = value.getString();

          context.trace(`...evaluated the '${reduceString}' function as '${valueString}'.`);

          return forward(value, back);
        }, back);
      }, back);
    }, back);
  });

  evaluateAnonymousProcedure(currentValue, nominalValue, context, forward, back) {
    let value;

    const { Values } = elements;

    value = currentValue; ///

    const values = Values.fromValue(value, context);

    value = valueFromNominalValue(nominalValue);

    values.addValue(value);

    return this.anonymousProcedure.evaluate(values, context, forward, back);
  }

  static name = "Reduce";
});
