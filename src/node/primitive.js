"use strict";

import nullNode from "../nullNode";
import NonTerminalNode from "../nonTerminalNode";

import { NULL, TRUE, FALSE } from "../constants";
import { NULL_TOKEN_TYPE, NUMBER_TOKEN_TYPE, BOOLEAN_TOKEN_TYPE, STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";

export default class PrimitiveNode extends NonTerminalNode {
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
