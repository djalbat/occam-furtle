"use strict";

import { Element, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { valueFromNode, valueFromBoolean } from "../utilities/value";
import { LIST_TYPE_NAME, BOOLEAN_TYPE_NAME } from "../typeNames";

const { every, breakable } = continuationUtilities;

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

  evaluate = breakable(function (context, continuation) {
    const everyString = this.getString();

    context.trace(`Evaluating the '${everyString}' every...`);

    const value = this.variable.evaluate(context),
          valueType = value.getType(),
          valueTypeListType = valueType.isListType();

    if (valueTypeListType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes();

    every(nodes, (node, continuation) => {
      const { Values } = elements,
            value = valueFromNode(node, context),
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

        const boolean = value.getBoolean();

        continuation(boolean);
      });
    }, (boolean) => {
      const value = valueFromBoolean(boolean, context),
            valueString = value.getString();

      context.trace(`...evaluated the '${everyString}' every as '${valueString}'.`);

      continuation(value);
    });
  });

  static name = "Every";
});
