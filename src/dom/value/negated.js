"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { BOOLEAN_TYPE } from "../../types";

const valueNodeQuery = nodeQuery("/negatedValue/value"),
      negatedValueNodeQuery = nodeQuery("/value/negatedValue");

export default domAssigned(class NegatedValue {
  constructor(string, type, value) {
    this.string = string;
    this.type = type;
    this.value = value;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getValue() {
    return this.value;
  }

  evaluate(context) {
    let value;

    const negatedValueString = this.string; ///

    context.trace(`Evaluating the '${negatedValueString}' negated value...`);

    value = this.value.evaluate(context);

    const valueType = value.getType();

    if (valueType !== BOOLEAN_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} left value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let boolean = value.getBoolean();

    boolean = !boolean;

    const { Value } = dom;

    value = Value.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${negatedValueString}' negated value.`);

    return value;
  }

  static name = "NegatedValue";

  static fromValueNode(valueNode, context) {
    let negatedValue = null;

    const negatedValueNode = negatedValueNodeQuery(valueNode);

    if (negatedValueNode !== null) {
      const { Value } = dom,
            node = negatedValueNode,  //
            string = context.nodeAsString(node),
            type = BOOLEAN_TYPE,
            valueNode = valueNodeQuery(negatedValueNode),
            value = Value.fromValueNode(valueNode, context);

      negatedValue = new NegatedValue(string, type, value);
    }

    return negatedValue;
  }
});
