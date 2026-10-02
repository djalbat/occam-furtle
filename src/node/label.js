"use strict";

import { NonTerminalNode } from "occam-languages";

import { NAME_TOKEN_TYPE } from "../tokenTypes";

export default class LabelNode extends NonTerminalNode {
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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(LabelNode, ruleName, childNodes, precedence, opacity); }
}
