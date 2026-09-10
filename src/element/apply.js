"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { valueFromBoolean } from "../utilities/value";
import { LIST_TYPE_NAME, BOOLEAN_TYPE_NAME } from "../typeNames";

const { every } = continuationUtilities,
      { unbreakable } = breakPointUtilities;

export default define(class Apply extends Element {
  constructor(context, string, node, breakPoint, values, variable, references) {
    super(context, string, node, breakPoint);

    this.string = string;
    this.values = values;
    this.variable = variable;
    this.references = references;
  }

  getValues() {
    return this.values;
  }

  getVariable() {
    return this.variable;
  }

  getReferences() {
    return this.references;
  }

  evaluate = unbreakable(function (context, forward, back) {
    const applyString = this.getString();

    context.trace(`Evaluating the '${applyString}' function...`);

    return this.variable.evaluate(context, (value, back) => {
      const valueType = value.getType(),
            valueTypeListType = valueType.isListType();

      if (!valueTypeListType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      const values = value.lift(context),
            valuesLength = values.length,
            referencesLength = this.references.getLength();

      if (valuesLength !== referencesLength) {
        const valueString = value.getString(),
              referencesString = this.references.getString(),
              message = `The ${valueString} values and '${referencesString}' function references are not the same length.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      return every(values, (value, context, forward, back, index) => {
        const reference = this.references.getReference(index);

        return this.callProcedure(reference, value, context, (value, back) => {
          const valueType = value.getType(),
                valueTypeBooleanType = valueType.isBooleanType();

          if (!valueTypeBooleanType) {
            const valueString = value.getString(),
                  message = `The '${valueString}' value's '${valueType}' type should be '${BOOLEAN_TYPE_NAME}'.`,
                  exception = Exception.fromMessage(message);

            return back(exception);
          }

          const primitiveValue = value.getPrimitiveValue(),
                boolean = primitiveValue;

          if (!boolean) {
            return back();
          }

          return forward(context, back);
        }, back);
      }, context, (context, back) => {
        const boolean = true,
              value = valueFromBoolean(boolean, context),
              valueString = value.getString();

        context.trace(`...evaluated the '${applyString}' function as '${valueString}'.`);

        return forward(value, back);
      }, back);
    }, back);
  });

  callProcedure(reference, value, context, forward, back) {
    let values;

    const { Values } = elements;

    values = Values.fromValue(value);

    values = values.merge(this.values); ///

    const { ProcedureCall } = elements,
          procedureCall = ProcedureCall.fromReferenceAndValues(reference, values, context);

    return procedureCall.evaluate(context, forward, back);
  }

  static name = "Apply";
});
