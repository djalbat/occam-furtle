"use strict";

import { Element, breakPointUtilities, continuationUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { valueFromNode, valueFromBoolean } from "../utilities/value";
import { LIST_TYPE_NAME, BOOLEAN_TYPE_NAME } from "../typeNames";

const { every } = continuationUtilities,
      { breakable } = breakPointUtilities;

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

  evaluate = breakable(function (context, back, forward) {
    const everyString = this.getString();

    context.trace(`Evaluating the '${everyString}' every...`);

    return this.variable.evaluate(context, back, (value) => {
      const valueType = value.getType(),
            valueTypeListType = valueType.isListType();

      if (valueTypeListType) {
        const valueString = value.getString(),
              message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
              exception = Exception.fromMessage(message);

        return back(exception);
      }

      const nodes = value.getNodes();

      return every(nodes, (node, back, forward) => {
        const { Values } = elements,
              value = valueFromNode(node, context),
              values = Values.fromValue(value, context);

        return this.anonymousProcedure.call(values, context, (value) => {
          const valueType = value.getType(),
                valueTypeBooleanType = valueType.isBooleanType();

          if (!valueTypeBooleanType) {
            const valueString = value.getString(),
                  message = `The '${valueString}' value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
                  exception = Exception.fromMessage(message);

            return back(exception);
          }

          const boolean = value.getBoolean();

          return forward(boolean);
        });
      }, back, (boolean) => {
        const value = valueFromBoolean(boolean, context),
              valueString = value.getString();

        context.trace(`...evaluated the '${everyString}' every as '${valueString}'.`);

        return forward(value);
      });
    });
  });

  static name = "Every";
});
