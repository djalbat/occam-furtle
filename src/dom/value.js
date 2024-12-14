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
  constructor(string, variable, node, number, boolean, stringLiteral) {
    this.string = string;
    this.variable = variable;
    this.node = node;
    this.number = number;
    this.boolean = boolean;
    this.stringLiteral = stringLiteral;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getNode() {
    return this.node;
  }

  getNumber() {
    return this.number;
  }

  getStringLiteral() {
    return this.stringLiteral;
  }

  getBoolean() {
    return this.boolean;
  }

  getType() {
    let type;

    if (false) {
      ///
    } else if (this.variable !== null) {
      type = this.variable.getType();
    } else if (this.number !== null) {
      type = NUMBER_TYPE;
    } else if (this.boolean !== null) {
      type = BOOLEAN_TYPE;
    } else if (this.stringLiteral !== null) {
      type = STRING_TYPE;
    } else {
      type = NODE_TYPE;
    }

    return type;
  }

  asString(context) {
    let string;

    if (false) {
      ///
    } else if (this.variable !== null) {
      string = null;
    } else if (this.number !== null) {
      string = `${this.number}`;
    } else if (this.boolean !== null) {
      string = `${this.boolean}`;
    } else if (this.stringLiteral !== null) {
      string = `${this.stringLiteral}`;
    } else {
      string = (this.node === null) ?
                  NULL :
                    context.nodeAsString(this.node);
    }

    return string;
  }

  resolve(context) {
    let value;

    const valueString = this.string;  ///

    context.trace(`Resolving the '${valueString}' value...`);

    value = (this.variable !== null) ?
               this.variable.resolve(context) :
                 this;  ///

    const string = value.asString(context); ///

    context.debug(`...resolved the '${valueString}' value to '${string}'.`);

    return value;
  }

  isEqualTo(value) {
    let equalTo;

    if (false) {
      ///
    } else if (this.stringLiteral !== null) {
      const stringLiteral = value.getStringLiteral();

      equalTo = (this.stringLiteral === stringLiteral);
    } else if (this.boolean !== null) {
      const boolean = value.getBoolean();

      equalTo = (this.boolean === boolean);
    } else if (this.number !== null) {
      const number = value.getNumber();

      equalTo = (this.number === number);
    } else {
      const node = value.getNode();

      if ((this.node === null) || (node === null)) {
        equalTo = (this.node === node);
      } else {
        equalTo = this.node.isEqualTo(node);
      }
    }

    return equalTo;
  }

  static name = "Value";

  static fromNode(node, context) {
    const string = context.nodeAsString(node),
          variable = null,
          number = null,
          boolean = null,
          stringLiteral = null,
          value = new Value(string, variable, node, number, boolean, stringLiteral);

    return value;
  }

  static fromBoolean(boolean, context) {
    const string = `${boolean}`,
          node = null,
          variable = null,
          number = null,
          stringLiteral = null,
          value = new Value(string, variable, node, number, boolean, stringLiteral);

    return value;
  }

  static fromValueNode(valueNode, context) {
    const value = valueFromValueNode(valueNode, context);

    return value;
  }

  static fromStringLiteral(stringLiteral, context) {
    const string = stringLiteral, ///
          node = null,
          variable = null,
          number = null,
          boolean = null,
          value = new Value(string, variable, node, number, boolean, stringLiteral);

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
        valueString = context.nodeAsString(valueNode),
        string = valueString, ///
        variable = Variable.fromValueNode(valueNode, context),
        node = nodeFromValueNode(valueNode, context),
        number = numberFromValueNode(valueNode, context),
        boolean = booleanFromValueNode(valueNode, context),
        stringLiteral = stringLiteralFromValueNode(valueNode, context),
        value = new Value(string, variable, node, number, boolean, stringLiteral);

  return value;
}

function nodeFromValueNode(valueNode, context) {
  const node = null;  ///

  return node;
}

function numberFromValueNode(valueNode, context) {
  let number = null;

  const numberTerminalNode = numberTerminalNodeQuery(valueNode);

  if (numberTerminalNode !== null) {
    const numberTerminalNodeContent = numberTerminalNode.getContent();

    number = Number(numberTerminalNodeContent);
  }

  return number;
}

function booleanFromValueNode(valueNode, context) {
  let boolean = null;

  const primitiveTerminalNode = primitiveTerminalNodeQuery(valueNode);

  if (primitiveTerminalNode !== null) {
    const primitiveTerminalNodeContent = primitiveTerminalNode.getContent();

    switch (primitiveTerminalNodeContent) {
      case TRUE: {
        boolean = true;

        break;
      }

      case FALSE: {
        boolean = false;

        break;
      }
    }
  }

  return boolean;
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
