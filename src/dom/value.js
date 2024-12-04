"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const valueNodeQuery = nodeQuery("/assignment/value"),
      numberTerminalNodeQuery = nodeQuery("/@number"),
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
          number = numberFromAssignmentNode(valueNode),
          primitive = primitiveFromAssignmentNode(valueNode),
          stringLiteral = stringLiteralFromAssignmentNode(valueNode),
          value = new Value(variable, number, primitive, stringLiteral);

    return value;
  }

  static fromAssignmentNode(assigmentNode, context) {
    let value = null;

    const valueNode = valueNodeQuery(assigmentNode);

    if (valueNode !== null) {
      const { Variable } = dom,
            variable = Variable.fromValueNode(valueNode, context),
            number = numberFromAssignmentNode(valueNode),
            primitive = primitiveFromAssignmentNode(valueNode),
            stringLiteral = stringLiteralFromAssignmentNode(valueNode);

      value = new Value(variable, number, primitive, stringLiteral);
    }

    return value;
  }
});

function numberFromAssignmentNode(assigmentNode) {
  let number = null;

  const numberTerminalNode = numberTerminalNodeQuery(assigmentNode);

  if (numberTerminalNode !== null) {
    const numberTerminalNodeContent = numberTerminalNode.getContent();

    number = numberTerminalNodeContent; ///
  }

  return number;
}

function primitiveFromAssignmentNode(assigmentNode) {
  let primitive = null;

  const primitiveTerminalNode = primitiveTerminalNodeQuery(assigmentNode);

  if (primitiveTerminalNode !== null) {
    const primitiveTerminalNodeContent = primitiveTerminalNode.getContent();

    primitive = primitiveTerminalNodeContent; ///
  }

  return primitive;
}

function stringLiteralFromAssignmentNode(assigmentNode) {
  let stringLiteral = null;

  const stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(assigmentNode);

  if (stringLiteralTerminalNode !== null) {
    const stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent();

    stringLiteral = stringLiteralTerminalNodeContent; ///
  }

  return stringLiteral;
}
