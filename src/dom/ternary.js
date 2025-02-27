"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";

const valueNodeQuery = nodeQuery("/ternary/value[0]"),
      ifValueNodeQuery = nodeQuery("/ternary/value[1]"),
      ternaryNodeQuery = nodeQuery("/value/ternary"),
      elseValueNodeQuery = nodeQuery("/ternary/value[2]");

export default domAssigned(class Ternary {
  constructor(string, value, ifValue, elseValue) {
    this.string = string;
    this.value = value;
    this.ifValue = ifValue;
    this.elseValue = elseValue;
  }

  getString() {
    return this.string;
  }

  getValue() {
    return this.value;
  }

  getIfBlock() {
    return this.ifValue;
  }

  getElseBlock() {
    return this.elseValue;
  }

  evaluate(context) {
    let value;

    const ternaryString = this.string; ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    value = this.value.evaluate(context);

    const valueType = value.getType();

    if (valueType !== BOOLEAN_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const boolean = value.getBoolean();

    value = boolean ?
      this.ifValue.evaluate(context) :
        this.elseValue.evaluate(context);

    context.debug(`...evaluated the '${ternaryString}' ternary.`);

    return value;
  }

  static name = "Ternary";

  static fromValueNode(valueNode, context) {
    let ternary = null;

    const ternaryNode = ternaryNodeQuery(valueNode);

    if (ternaryNode !== null) {
      const { Value } = dom,
            string = stringFromTernaryNode(ternaryNode, context),
            ifValueNode = ifValueNodeQuery(ternaryNode),
            elseValueNode = elseValueNodeQuery(ternaryNode),
            value = Value.fromTernaryNode(ternaryNode, context),
            ifValue = Value.fromValueNode(ifValueNode, context),
            elseValue = Value.fromValueNode(elseValueNode, context);

      ternary = new Ternary(string, value, ifValue, elseValue);
    }

    return ternary;
  }
});

function stringFromTernaryNode(ternaryNode, context) {
  let string;

  const valueNode = valueNodeQuery(ternaryNode),
        ifValueNode = ifValueNodeQuery(ternaryNode),
        elseValueNode = elseValueNodeQuery(ternaryNode),
        ifValueString = context.nodeAsString(ifValueNode),
        elseValueString = context.nodeAsString(elseValueNode),
        valueString = context.nodeAsString(valueNode);

  string = `If (${valueString}) ${ifValueString} ${elseValueString}`;

  return string;
}
