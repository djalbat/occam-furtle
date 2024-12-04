"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const numberTerminalNodeQuery = nodeQuery("/@number"),
      conditionValueNodeQuery = nodeQuery("/condition/value"),
      assignmentValueNodeQuery = nodeQuery("/assignment/value"),
      primitiveTerminalNodeQuery = nodeQuery("/@number"),
      stringLiteralTerminalNodeQuery = nodeQuery("/@string-literal");

export default domAssigned(class Value {
  constructor(variable, number, primitive, stringLiteral) {
    this.variable = variable;
    this.number = number;
    this.primitive = primitive;
    this.stringLiteral = stringLiteral;
  }

  getVariable() {
    return this.variable;
  }

  getNumber() {
    return this.number;
  }

  getPrimitive() {
    return this.primitive;
  }

  getStringLiteral() {
    return this.stringLiteral;
  }

  getString() {
    debugger
  }

  static name = "Value";

  static fromValueNode(valueNode, context) {
    const { Variable } = dom,
          variable = Variable.fromValueNode(valueNode, context),
          number = numberFromValueNode(valueNode),
          primitive = primitiveFromValueNode(valueNode),
          stringLiteral = stringLiteralFromValueNode(valueNode),
          value = new Value(variable, number, primitive, stringLiteral);

    return value;
  }

  static fromAssignmentNode(assigmentNode, context) {
    let value = null;

    const assignmentValueNode = assignmentValueNodeQuery(assigmentNode);

    if (assignmentValueNode !== null) {
      const { Variable } = dom,
            valueNode = assignmentValueNode,  ///
            variable = Variable.fromValueNode(valueNode, context),
            number = numberFromValueNode(valueNode),
            primitive = primitiveFromValueNode(valueNode),
            stringLiteral = stringLiteralFromValueNode(valueNode);

      value = new Value(variable, number, primitive, stringLiteral);
    }

    return value;
  }

  static fromConditionalNode(conditionalNode, context) {
    let value = null;

    const conditionValueNode = conditionValueNodeQuery(conditionalNode);

    if (conditionValueNode !== null) {
      const { Variable } = dom,
            valueNode = conditionValueNode, ///
            variable = Variable.fromValueNode(valueNode, context),
            number = numberFromValueNode(valueNode),
            primitive = primitiveFromValueNode(valueNode),
            stringLiteral = stringLiteralFromValueNode(valueNode);

      value = new Value(variable, number, primitive, stringLiteral);
    }

    return value;
  }
});

function numberFromValueNode(valueNode) {
  let number = null;

  const numberTerminalNode = numberTerminalNodeQuery(valueNode);

  if (numberTerminalNode !== null) {
    const numberTerminalNodeContent = numberTerminalNode.getContent();

    number = numberTerminalNodeContent; ///
  }

  return number;
}

function primitiveFromValueNode(valueNode) {
  let primitive = null;

  const primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);

  if (primitiveTerminalNode !== null) {
    const primitiveTerminalNodeContent = primitiveTerminalNode.getContent();

    primitive = primitiveTerminalNodeContent; ///
  }

  return primitive;
}

function stringLiteralFromValueNode(valueNode) {
  let stringLiteral = null;

  const stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(valueNode);

  if (stringLiteralTerminalNode !== null) {
    const stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent();

    stringLiteral = stringLiteralTerminalNodeContent; ///
  }

  return stringLiteral;
}
