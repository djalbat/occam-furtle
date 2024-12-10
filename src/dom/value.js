"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const numberTerminalNodeQuery = nodeQuery("/value/@number"),
      conditionValueNodeQuery = nodeQuery("/condition/value"),
      assignmentValueNodeQuery = nodeQuery("/assignment/value"),
      primitiveTerminalNodeQuery = nodeQuery("/value/@primitive"),
      returnStatementValueNodeQuery = nodeQuery("/returnStatement/value"),
      stringLiteralTerminalNodeQuery = nodeQuery("/value/@string-literal");

export default domAssigned(class Value {
  constructor(number, variable, primitive, stringLiteral) {
    this.number = number;
    this.variable = variable;
    this.primitive = primitive;
    this.stringLiteral = stringLiteral;
  }

  getNumber() {
    return this.number;
  }

  getVariable() {
    return this.variable;
  }

  getPrimitive() {
    return this.primitive;
  }

  getStringLiteral() {
    return this.stringLiteral;
  }

  getString() {
    let string;

    if (false) {
      ///
    } else if (this.variable !== null) {
      const variableString = this.variable.getString();

      string = variableString;  ///
    } else if (this.number !== null) {
      const numberString = `${this.number}`;

      string = numberString;  ///
    } else if (this.stringLiteral !== null) {
      const stringLiteralString = `"${this.stringLiteral}"`;

      string = stringLiteralString; ///
    } else {
      const primitiveString = `${this.primitive}`;

      string = primitiveString; ///
    }

    return string;
  }

  static name = "Value";

  static fromValueNode(valueNode, context) {
    const value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromConditionNode(conditionNode, context) {
    let value = null;

    const conditionValueNode = conditionValueNodeQuery(conditionNode);

    if (conditionValueNode !== null) {
      const valueNode = conditionValueNode; ///

      value = valueFromValueNode(valueNode, context);
    }

    return value;
  }

  static fromAssignmentNode(assigmentNode, context) {
    let value = null;

    const assignmentValueNode = assignmentValueNodeQuery(assigmentNode);

    if (assignmentValueNode !== null) {
      const valueNode = assignmentValueNode;  ///

      value = valueFromValueNode(valueNode, context);
    }

    return value;
  }

  static fromReturnStatementNode(returnStatementNode, context) {
    let value = null;

    const returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode);

    if (returnStatementValueNode !== null) {
      const valueNode = returnStatementValueNode; ///

      value = valueFromValueNode(valueNode, context);
    }

    return value;
  }
});

function valueFromValueNode(valueNode, context) {
  const { Value, Variable } = dom,
        number = numberFromValueNode(valueNode),
        variable = Variable.fromValueNode(valueNode, context),
        primitive = primitiveFromValueNode(valueNode),
        stringLiteral = stringLiteralFromValueNode(valueNode),
        value = new Value(number, variable, primitive, stringLiteral);

  return value;
}

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
