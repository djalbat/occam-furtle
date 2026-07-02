"use strict";

import { NonTerminalNode } from "occam-languages";

import NominalValue from "../nominalValue";

import { TEN, NULL, TRUE, FALSE } from "../constants";
import { STRING_TYPE_NAME, BOOLEAN_TYPE_NAME, INTEGER_TYPE_NAME, NOMINAL_VALUE_TYPE_NAME } from "../typeNames";
import { NULL_TOKEN_TYPE, INTEGER_TOKEN_TYPE, BOOLEAN_TOKEN_TYPE, STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";

export default class PrimitiveNode extends NonTerminalNode {
  getTypeName() {
    let typeName;

    const boolean = this.getBoolean(),
          integer = this.getInteger(),
          nominalvalue = this.getNominaValue(),
          stringLiteral = this.getStringLiteral();

    if (false) {
      ///
    } else if (boolean !== null) {
      typeName = BOOLEAN_TYPE_NAME;
    } else if (integer !== null) {
      typeName = INTEGER_TYPE_NAME;
    } else if (nominalvalue !== null) {
      typeName = NOMINAL_VALUE_TYPE_NAME;
    } else if (stringLiteral !== null) {
      typeName = STRING_TYPE_NAME;
    }

    return typeName;
  }

  getValue() {
    let value;

    const boolean = this.getBoolean(),
          integer = this.getInteger(),
          nominalValue = this.getNominaValue(),
          stringLiteral = this.getStringLiteral();

    if (false) {
      ///
    } else if (integer !== null) {
      value = integer; ///
    } else if (boolean !== null) {
      value = boolean;  ///
    } else if (nominalValue !== null) {
      value = nominalValue; ///
    } else if (stringLiteral !== null) {
      value = stringLiteral;  ///
    }

    return value;
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

  getInteger() {
    let integer = null;

    const tokenType = INTEGER_TOKEN_TYPE; ///

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent(),
            radix = TEN;

      integer = parseInt(content, radix)

      return true;
    }, tokenType);

    return integer;
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
