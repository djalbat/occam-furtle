"use strict";

import { NonTerminalNode } from "occam-languages";

import { VARIABLE_RULE_NAME } from "../ruleNames";

export default class TryIntegerNode extends NonTerminalNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(TryIntegerNode, ruleName, childNodes, precedence, opacity); }
}
