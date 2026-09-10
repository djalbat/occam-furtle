"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { LIST_TYPE_NAME, BOOLEAN_TYPE_NAME } from "../typeNames";
import { valueFromBoolean, valueFromNominalValue } from "../utilities/value";

const { every } = continuationUtilities,
      { unbreakable } = breakPointUtilities;

export default define(class Every extends Element {
  constructor(context, string, node, breakPoint, variable, anonymousProcedure) {
    super(context, string, node, breakPoint);

    this.string = string;
    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate = unbreakable(function (context, forward, back) {
    const everyString = this.getString();

    context.trace(`Evaluating the '${everyString}' function...`);

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

      return every(nominalValues, (nominalValue, context, forward, back) => {
        return this.evaluateAnonymousProcedure(nominalValue, context, forward, back);
      }, context, (context, back) => {
        const boolean = true,
              value = valueFromBoolean(boolean, context),
              valueString = value.getString();

        context.trace(`...evaluated the '${everyString}' function as '${valueString}'.`);

        return forward(value, back);
      }, back);
    }, back);
  });

  evaluateAnonymousProcedure(nominalValue, context, forward, back) {
    const { Values } = elements,
          value = valueFromNominalValue(nominalValue, context),
          values = Values.fromValue(value, context);

    return this.anonymousProcedure.evaluate(values, context, (value, back) => {
      const valueType = value.getType(),
            valueTypeBooleanType = valueType.isBooleanType();

      if (!valueTypeBooleanType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      const primitiveValue = value.getPrimitiveValue(),
            boolean = primitiveValue; ///

      if (!boolean) {
        return back();
      }

      return forward(context, back);
    }, back);
  }

  static name = "Every";
});
