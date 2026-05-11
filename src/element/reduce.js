"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import elements from "../elements";
import Exception from "../exception";

import { define } from "../elements";
import { termFromNode } from "../utilities/term";
import { NOMINAL_VALUES_TYPE } from "../types";

const { asyncReduce } = asynchronousUtilities;

export default define(class Reduce extends Element {
  constructor(context, string, node, breakPoint, variable, initialExpression, anonymousProcedure) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.initialExpression = initialExpression;
    this.anonymousProcedure = anonymousProcedure;
  }

  getVariable() {
    return this.variable;
  }

  getInitialExpression() {
    return this.initialExpression;
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

    const nodes = value.getNodes(),
          initialExpression = await this.initialExpression.evaluate(context);

    value = await asyncReduce(nodes, async (currentExpression, node) => {
      let value;

      const { Terms } = elements;

      value = currentTerm; ///

      const values = Terms.fromTerm(value, context);

      value = valueFromNode(node, context);

      values.addTerm(value);

      value = await this.anonymousProcedure.call(values, context);

      return value;
    }, initialExpression);

    const valueString = value.getString();

    context.trace(`...evaluated the '${reduceString}' reduce as '${valueString}'.`);

    return value;
  }

  static name = "Reduce";
});
