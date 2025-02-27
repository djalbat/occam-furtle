"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const ifValueNodeQuery = nodeQuery("/ternary/value[0]"),
      ternaryNodeQuery = nodeQuery("/value/ternary"),
      conditionNodeQuery = nodeQuery("/ternary/condition"),
      elseValueNodeQuery = nodeQuery("/ternary/value[1]");

export default domAssigned(class Ternary {
  constructor(string, condition, ifValue, elseValue) {
    this.string = string;
    this.condition = condition;
    this.ifValue = ifValue;
    this.elseValue = elseValue;
  }

  getString() {
    return this.string;
  }

  getCondition() {
    return this.condition;
  }

  getConditionBlock() {
    return this.ifValue;
  }

  getElseBlock() {
    return this.elseValue;
  }

  evaluate(context) {
    let value;

    const ternaryString = this.string; ///

    context.trace(`Evaluating the '${ternaryString}' ternary...`);

    value = this.condition.evaluate(context);

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
      const { Value, Condition } = dom,
            string = stringFromTernaryNode(ternaryNode, context),
            ifValueNode = ifValueNodeQuery(ternaryNode),
            elseValueNode = elseValueNodeQuery(ternaryNode),
            condition = Condition.fromTernaryNode(ternaryNode, context),
            ifValue = Value.fromValueNode(ifValueNode, context),
            elseValue = Value.fromValueNode(elseValueNode, context);

      ternary = new Ternary(string, condition, ifValue, elseValue);
    }

    return ternary;
  }
});

function stringFromTernaryNode(ternaryNode, context) {
  let string;

  const ifValueNode = ifValueNodeQuery(ternaryNode),
        elseValueNode = elseValueNodeQuery(ternaryNode),
        conditionNode = conditionNodeQuery(ternaryNode),
        ifValueString = context.nodeAsString(ifValueNode),
        elseValueString = context.nodeAsString(elseValueNode),
        conditionString = context.nodeAsString(conditionNode);

  string = `If (${conditionString}) ${ifValueString} ${elseValueString}`;

  return string;
}
