"use strict";

import { Element } from "occam-languages";

import Exception from "../exception";

import { define } from "../elements";
import { NOMINAL_VALUE_TYPE_NAME } from "../typeNames";
import { valueFromNodesAndNominalValue } from "../utilities/value";

export default define(class NodesQuery extends Element {
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

    const nodesQueryString = this.getString();  ///

    context.trace(`Evaluating the '${nodesQueryString}' nodes query...`);

    if (this.query === null) {
      const message = `Cannot evaluate the '${nodesQueryString}' nodes query because its expression is malformed.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    value = this.variable.evaluate(context);

    const valueType = value.getType();

    if (valueType !== NOMINAL_VALUE_TYPE_NAME) {
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

    const nodes = this.query.execute(node);

    value = valueFromNodesAndNominalValue(nodes, nominalValue);

    const valueString = value.getString();

    context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${valueString}'.`);

    return value;
  }

  static name = "NodesQuery";
});
