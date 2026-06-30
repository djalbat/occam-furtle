"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { NAME_TOKEN_TYPE } from "../tokenTypes";

export default class ReferenceNode extends NonTerminalNode {
  getName() {
    let name;

    const tokenType = NAME_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      name = content; ///

      return true;
    }, tokenType);

    return name;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReferenceNode, ruleName, childNodes, opacity, precedence); }
}
