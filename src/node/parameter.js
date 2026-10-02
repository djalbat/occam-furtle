"use strict";

import { NonTerminalNode } from "occam-languages";

import { TYPE_RULE_NAME } from "../ruleNames";
import { NAME_TOKEN_TYPE } from "../tokenTypes";

export default class ParameterNode extends NonTerminalNode {
  getName() {
    let name = null;

    const tokenType = NAME_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      name = content; //

      return true;
    }, tokenType);

    return name;
  }

  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ParameterNode, ruleName, childNodes, precedence, opacity); }
}
