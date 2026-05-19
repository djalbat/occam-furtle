"use strict";

import { NonTerminalNode } from "occam-languages";

import NominalValue from "../nominalValue";

import { NULL, TRUE, FALSE } from "../constants";
import { STRING_TYPE, NUMBER_TYPE, BOOLEAN_TYPE, NOMINAL_VALUE_TYPE } from "../types";
import { NULL_TOKEN_TYPE, NUMBER_TOKEN_TYPE, BOOLEAN_TOKEN_TYPE, STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";

export default class PrimitiveNode extends NonTerminalNode {
  getType() {
    let type;

    const number = this.getNumber(),
          boolean = this.getBoolean(),
          nominalvalue = this.getNominaValue(),
          stringLiteral = this.getStringLiteral();

    if (false) {
      ///
    } else if (number !== null) {
      type = NUMBER_TYPE;
    } else if (boolean !== null) {
      type = BOOLEAN_TYPE;
    } else if (nominalvalue !== null) {
      type = NOMINAL_VALUE_TYPE;
    } else if (stringLiteral !== null) {
      type = STRING_TYPE;
    }

    return type;
  }

  getValue() {
    let value;

    const number = this.getNumber(),
          boolean = this.getBoolean(),
          nominalValue = this.getNominaValue(),
          stringLiteral = this.getStringLiteral();

    if (false) {
      ///
    } else if (number !== null) {
      value = number; ///
    } else if (boolean !== null) {
      value = boolean;  ///
    } else if (nominalValue !== null) {
      value = nominalValue; ///
    } else if (stringLiteral !== null) {
      value = stringLiteral;  ///
    }

    return value;
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

  getNominaValue() {
    let nominalValue = null;

    const tokenType = NULL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === NULL) {
        nominalValue = NominalValue.fromNothing();

        return true;
      }
    }, tokenType);

    return nominalValue;
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
