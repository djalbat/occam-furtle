"use strict";

import { NonTerminalNode } from "occam-languages";

import { VALUE_RULE_NAME } from "../ruleNames";

export default class ReturnStatementNode extends NonTerminalNode {
  getValueNode() {
    const ruleName = VALUE_RULE_NAME,
          valueNode = this.getNodeByRuleName(ruleName);

    return valueNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReturnStatementNode, ruleName, childNodes, opacity, precedence); }
}
