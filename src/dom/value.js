"use strict";

import dom from "../dom";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NULL, TRUE, FALSE } from "../constants";
import { NODE_TYPE, NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE } from "../types";

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

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.node !== null) {
      type = NODE_TYPE;
    } else if (this.number !== null) {
      type = NUMBER_TYPE;
    } else if (this.variable !== null) {
      type = this.variable.getType();
    } else if (this.stringLiteral !== null) {
      type = STRING_TYPE;
    } else {
      switch (this.primitive) {
        case null: {
          type = NULL_TYPE;

          break;
        }

        case true:
        case false: {
          type = BOOLEAN_TYPE;

          break;
        }
      }
    }

    return type;
  }

  static name = "Value";

  static fromNode(node, context) {
    const string = context.nodeAsString(node),
          number = null,
          variable = null,
          primitive = null,
          stringLiteral = null,
          value = new Value(string, node, number, variable, primitive, stringLiteral);

    return value;
  }

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
        node = valueNode, ///
        string = context.nodeAsString(node),
        number = numberFromValueNode(valueNode, context),
        variable = Variable.fromValueNode(valueNode, context),
        primitive = primitiveFromValueNode(valueNode, context),
        stringLiteral = stringLiteralFromValueNode(valueNode, context),
        value = new Value(string, node, number, variable, primitive, stringLiteral);

  return value;
}

function numberFromValueNode(valueNode, context) {
  let number = null;

  const numberTerminalNode = numberTerminalNodeQuery(valueNode);

  if (numberTerminalNode !== null) {
    const numberTerminalNodeContent = numberTerminalNode.getContent();

    number = numberTerminalNodeContent; ///
  }

  return number;
}

function primitiveFromValueNode(valueNode, context) {
  let primitive;

  const primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);

  if (primitiveTerminalNode !== null) {
    const primitiveTerminalNodeContent = primitiveTerminalNode.getContent();

    switch (primitiveTerminalNodeContent) {
      case NULL: {
        primitive = null;

        break;
      }

      case TRUE: {
        primitive = true;

        break;
      }

      case FALSE: {
        primitive = false;

        break;
      }
    }

    primitive = primitiveTerminalNodeContent; ///
  }

  return primitive;
}

function stringLiteralFromValueNode(valueNode, context) {
  let stringLiteral = null;

  const stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(valueNode);

  if (stringLiteralTerminalNode !== null) {
    const stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent();

    stringLiteral = stringLiteralTerminalNodeContent; ///
  }

  return stringLiteral;
}
