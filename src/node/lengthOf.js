"use strict";

import { NonTerminalNode } from "occam-languages";

import { VARIABLE_RULE_NAME } from "../ruleNames";

export default class LengthOfNode extends NonTerminalNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(LengthOfNode, ruleName, childNodes, precedence, opacity); }
}
