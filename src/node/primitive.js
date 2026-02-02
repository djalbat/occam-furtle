"use strict";

import nullNode from "../nullNode";
import NonTerminalNode from "../nonTerminalNode";

import { NULL, TRUE, FALSE } from "../constants";
import { NODE_TYPE, STRING_TYPE, NUMBER_TYPE, BOOLEAN_TYPE } from "../types";
import { NULL_TOKEN_TYPE, NUMBER_TOKEN_TYPE, BOOLEAN_TOKEN_TYPE, STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";

export default class PrimitiveNode extends NonTerminalNode {
  getType() {
    let type;

    const node = this.getNode(),
          number = this.getNumber(),
          boolean = this.getBoolean(),
          stringLiteral = this.getStringLiteral();

    if (false) {
      ///
    } else if (node !== null) {
      type = NODE_TYPE;
    } else if (number !== null) {
      type = NUMBER_TYPE;
    } else if (boolean !== null) {
      type = BOOLEAN_TYPE;
    } else if (stringLiteral !== null) {
      type = STRING_TYPE;
    }

    return type;
  }

  getValue() {
    let value;

    const node = this.getNode(),
          number = this.getNumber(),
          boolean = this.getBoolean(),
          stringLiteral = this.getStringLiteral();

    if (false) {
      ///
    } else if (node !== null) {
      value = node; ///
    } else if (number !== null) {
      value = number; ///
    } else if (boolean !== null) {
      value = boolean;  ///
    } else if (stringLiteral !== null) {
      value = stringLiteral;  ///
    }

    return value;
  }

  getNode() {
    let node = null;

    const tokenType = NULL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === NULL) {
        node = nullNode;

        return true;
      }
    }, tokenType);

    return node;
  }

  getNumber() {
    let number = null;

    const tokenType = NUMBER_TOKEN_TYPE; ///

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === TRUE) {
        number = Number(content);

        return true;
      }
    }, tokenType);

    return number;
  }

  getBoolean() {
    let boolean = null;

    const tokenType = BOOLEAN_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === TRUE) {
        boolean = true;

        return true;
      }

      if (content === FALSE) {
        boolean = false;

        return true;
      }
    }, tokenType);

    return boolean;
  }

  getStringLiteral() {
    let stringLiteral = null;

    const tokenType = STRING_LITERAL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      stringLiteral = content;  ///

      return true;
    }, tokenType);

    return stringLiteral;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PrimitiveNode, ruleName, childNodes, opacity, precedence); }
}
