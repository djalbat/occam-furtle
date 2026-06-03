"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import Exception from "../exception";

import { define } from "../elements";
import { NOMINAL_VALUE_TYPE_NAME } from "../typeNames";
import { valueFromNodeAndNominalValue } from "../utilities/value";

const { first } = arrayUtilities;

export default define(class NodeQuery extends Element {
  constructor(context, string, node, breakPoint, variable, query) {
    super(context, string, node, breakPoint);

    this.variable = variable;
    this.query = query;
  }

  getVariable() {
    return this.variable;
  }

  getQuery() {
    return this.query;
  }

  evaluate(context) {
    let value;

    const nodeQueryString = this.getString();  ///

    context.trace(`Evaluating the '${nodeQueryString}' function...`);

    if (this.query === null) {
      const message = `Cannot evaluate the '${nodeQueryString}' function because its expression is malformed.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    value = this.variable.evaluate(context);

    const valueType = value.getType(),
          valueTypeNominalValueType = valueType.isNominalValueType();

    if (!valueTypeNominalValueType) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's '${valueType}' type should be '${NOMINAL_VALUE_TYPE_NAME}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    const primitiveValue = value.getPrimitiveValue(),
          nominalValue = primitiveValue;  ///

    node = nominalValue.getNode();

    if (node === null) {
      const valueString = value.getString(),
            message = `The '${valueString}' value's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = this.query.execute(node),
          nodesLength = nodes.length;

    if (nodesLength !== 1) {
      const message = `The length of the returned nodes is ${nodesLength} when it should be 1.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const firstNode = first(nodes);

    node = firstNode ///

    value = valueFromNodeAndNominalValue(node, nominalValue);

    const valueString = value.getString();

    context.debug(`...evaluated the '${nodeQueryString}' function as '${valueString}'.`);

    return value;
  }

  static name = "NodeQuery";
});
