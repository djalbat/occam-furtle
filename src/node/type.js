"use strict";

import { NonTerminalNode } from "occam-languages";

import { TYPE_TOKEN_TYPE } from "../tokenTypes";

export default class TypeNode extends NonTerminalNode {
  getName() {
    let name = null;

    const tokenType = TYPE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      name = content; //

      return true;
    }, tokenType);

    return name;
  }

  getArgumentTypeName() {
    let argumentTypeName = null;

    const tokenType = TYPE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode, index) => {
      if (index === 1) {
        const content = terminalNode.getContent();

        argumentTypeName = content; //

        return true;
      }
    }, tokenType);

    return argumentTypeName;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(TypeNode, ruleName, childNodes, precedence, opacity); }
}
