"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const valueNodeQuery = nodeQuery("/bracketedValue/value"),
      valueBracketedValueNodeQuery = nodeQuery("/value/bracketedValue");

export default domAssigned(class BracketedValue {
  constructor(string, value) {
    this.string = string;
    this.value = value;
  }

  getString() {
    return this.string;
  }

  getValue() {
    return this.value;
  }

  getType() { return this.value.getType(); }

  evaluate(context) {
    let value;

    const bracketedValueString = this.string; ///

    context.trace(`Evaluating the '${bracketedValueString}' bracketed value...`);

    value = this.value.evaluate(context);

    context.debug(`...evaluated the '${bracketedValueString}' bracketed value.`);

    return value;
  }

  static name = "BracketedValue";

  static fromValueNode(valueNode, context) {
    let bracketedValue = null;

    const valueBracketedValueNode = valueBracketedValueNodeQuery(valueNode);

    if (valueBracketedValueNode !== null) {
      const bracketedValueNode = valueBracketedValueNode; ///

      bracketedValue = bracketedValueFromBracketedValueNode(bracketedValueNode, context);
    }

    return bracketedValue;
  }
});

function bracketedValueFromBracketedValueNode(bracketedValueNode, context) {
  const { Value, BracketedValue } = dom,
        valueNode = valueNodeQuery(bracketedValueNode),
        value = Value.fromValueNode(valueNode, context),
        string = stringFromValue(value, context),
        bracketedValue = new BracketedValue(string, value);

  return bracketedValue;
}

function stringFromValue(value, context) {
  const valueString = value.asString(context),
        string = `(${valueString})`;

  return string;
}
