"use strict";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { BOOLEAN_TYPE } from "../../types";
import { CONJUNCTION, DISJUNCTION } from "../../constants";

const terminalNodeQuery = nodeQuery("/bitwiseValue/@*"),
      leftValueNodeQuery = nodeQuery("/bitwiseValue/value[0]"),
      rightValueNodeQuery = nodeQuery("/bitwiseValue/value[1]"),
      valueBitwiseValueNodeQuery = nodeQuery("/value/bitwiseValue");

export default domAssigned(class BitwiseValue {
  constructor(string, type, disjoint, leftValue, rightValue) {
    this.string = string;
    this.type = type;
    this.disjoint = disjoint;
    this.leftValue = leftValue;
    this.rightValue = rightValue;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  isDisjoint() {
    return this.disjoint;
  }

  getLeftValue() {
    return this.leftValue;
  }

  getRightValue() {
    return this.rightValue;
  }

  evaluate(context) {
    let value;

    const bitwiseValueString = this.string; ///

    context.trace(`Evaluating the '${bitwiseValueString}' bitwise value...`);

    const { Value } = dom,
          leftValue = this.leftValue.evaluate(context),
          rightValue = this.rightValue.evaluate(context),
          leftValueType = leftValue.getType(),
          rightValueType = rightValue.getType();

    if (leftValueType !== BOOLEAN_TYPE) {
      const leftValueString = leftValue.asString(context),
            message = `The ${leftValueString} left value's type is '${leftValueType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    if (rightValueType !== BOOLEAN_TYPE) {
      const rightValueString = rightValue.asString(context),
            message = `The ${rightValueString} right value's type is '${rightValueType}' when it should be of type '${BOOLEAN_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const leftValueBoolean = leftValue.getBoolean(),
          rightValueBoolean = rightValue.getBoolean(),
          boolean = this.disjoint ?
                      (leftValueBoolean || rightValueBoolean) :
                        (leftValueBoolean && rightValueBoolean);

    value = Value.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${bitwiseValueString}' bitwise value.`);

    return value;
  }

  static name = "BitwiseValue";

  static fromValueNode(valueNode, context) {
    let bitwiseValue = null;

    const valueBitwiseValueNode = valueBitwiseValueNodeQuery(valueNode);

    if (valueBitwiseValueNode !== null) {
      const bitwiseValueNode = valueBitwiseValueNode; ///

      bitwiseValue = bitwiseValueFromBitwiseValueNode(bitwiseValueNode, context);
    }

    return bitwiseValue;
  }
});

function bitwiseValueFromBitwiseValueNode(bitwiseValueNode, context) {
  const { Value, BitwiseValue } = dom,
        leftValueNode = leftValueNodeQuery(bitwiseValueNode),
        rightValueNode = rightValueNodeQuery(bitwiseValueNode),
        type = BOOLEAN_TYPE,
        disjoint = disjointFromBitwiseValueNode(bitwiseValueNode, context),
        leftValue = Value.fromValueNode(leftValueNode, context),
        rightValue = Value.fromValueNode(rightValueNode, context),
        string = stringFromTypeDisjointLeftValueAndRightValue(disjoint, leftValue, rightValue, context),
        bitwiseValue = new BitwiseValue(string, type, disjoint, leftValue, rightValue);

  return bitwiseValue;
}

function disjointFromBitwiseValueNode(bitwiseValueNode, context) {
  const terminalNode = terminalNodeQuery(bitwiseValueNode),
        terminalNodeContent = terminalNode.getContent(),
        disjoint = (terminalNodeContent === DISJUNCTION);

  return disjoint;
}

function stringFromTypeDisjointLeftValueAndRightValue(disjoint, leftValue, rightValue, context) {
  const operatorString = disjoint ?
                           DISJUNCTION :
                             CONJUNCTION,
        leftValueString = leftValue.asString(context),
        rightValueString = rightValue.asString(context),
        string = `${leftValueString} ${operatorString} ${rightValueString}`;

  return string;
}
