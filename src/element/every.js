"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { valueFromNode, valueFromBoolean } from "../utilities/value";
import { LIST_TYPE_NAME, BOOLEAN_TYPE_NAME } from "../typeNames";

const { asyncEvery } = asynchronousUtilities;

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

  async evaluate(context) {
    let value;

    await this.break(context);

    const everyString = this.getString();

    context.trace(`Evaluating the '${everyString}' every...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType(),
          valueTypeListType = valueType.isListType();

    if (valueTypeListType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${LIST_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes(),
          boolean = await asyncEvery(nodes, async (node) => {
            let value;

            const { Values } = elements;

            value = valueFromNode(node, context);

            const values = Values.fromValue(value, context);

            value = await this.anonymousProcedure.call(values, context);

            const valueType = value.getType(),
                  valueTypeBooleanType = valueType.isBooleanType();

            if (!valueTypeBooleanType) {
              const termString = term.getString(),
                    message = `The '${termString}' term's type is '${termType}' when it should be of type '${BOOLEAN_TYPE_NAME}'.`,
                    exception = Exception.fromMessage(message);

              throw exception;
            }

            const boolean = value.getBoolean();

            return boolean;
          });

    value = valueFromBoolean(boolean, context);

    const valueString = value.getString();

    context.trace(`...evaluated the '${everyString}' every as '${valueString}'.`);

    return value;
  }

  static name = "Every";
});
