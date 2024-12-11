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
  constructor(string, node, number, variable, primitive, stringLiteral) {
    this.string = string;
    this.node = node;
    this.number = number;
    this.variable = variable;
    this.primitive = primitive;
    this.stringLiteral = stringLiteral;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
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

  static name = "Value";

  static fromNode(node, fileContext) {
    const string = fileContext.nodeAsString(node),
          number = null,
          variable = null,
          primitive = null,
          stringLiteral = null,
          value = new Value(string, node, number, variable, primitive, stringLiteral);

    return value;
  }

  static fromValueNode(valueNode) {
    const value = valueFromValueNode(valueNode);

    return value;
  }

  static fromConditionNode(conditionNode) {
    let value = null;

    const conditionValueNode = conditionValueNodeQuery(conditionNode);

    if (conditionValueNode !== null) {
      const valueNode = conditionValueNode; ///

      value = valueFromValueNode(valueNode);
    }

    return value;
  }

  static fromAssignmentNode(assigmentNode) {
    let value = null;

    const assignmentValueNode = assignmentValueNodeQuery(assigmentNode);

    if (assignmentValueNode !== null) {
      const valueNode = assignmentValueNode;  ///

      value = valueFromValueNode(valueNode);
    }

    return value;
  }

  static fromReturnStatementNode(returnStatementNode) {
    let value = null;

    const returnStatementValueNode = returnStatementValueNodeQuery(returnStatementNode);

    if (returnStatementValueNode !== null) {
      const valueNode = returnStatementValueNode; ///

      value = valueFromValueNode(valueNode);
    }

    return value;
  }
});

function valueFromValueNode(valueNode) {
  const { Value, Variable } = dom,
        node = null,
        number = numberFromValueNode(valueNode),
        variable = Variable.fromValueNode(valueNode),
        primitive = primitiveFromValueNode(valueNode),
        stringLiteral = stringLiteralFromValueNode(valueNode),
        string = stringFromNumberVariableStringLiteralAndPrimitive(number, variable, stringLiteral, primitive),
        value = new Value(string, node, number, variable, primitive, stringLiteral);

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

function stringFromNumberVariableStringLiteralAndPrimitive(number, variable, stringLiteral, primitive) {
  let string;

  if (false) {
    ///
  } else if (number !== null) {
    const numberString = `${number}`;

    string = numberString;  ///
  } else if (variable !== null) {
    const variableString = variable.getString();

    string = variableString;  ///
  } else if (stringLiteral !== null) {
    const stringLiteralString = `"${stringLiteral}"`;

    string = stringLiteralString; ///
  } else {
    const primitiveString = `${primitive}`;

    string = primitiveString; ///
  }

  return string;
}
