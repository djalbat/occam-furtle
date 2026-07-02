"use strict";

import { NonTerminalNode } from "occam-languages";

import { VALUE_RULE_NAME } from "../ruleNames";

export default class ValuesNode extends NonTerminalNode {
  getValueNodes() {
    const ruleName = VALUE_RULE_NAME,
          valueNodes = this.getNodesByRuleName(ruleName);

    return valueNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ValuesNode, ruleName, childNodes, opacity, precedence); }
}
