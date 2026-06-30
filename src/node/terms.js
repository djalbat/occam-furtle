"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { TERM_RULE_NAME } from "../ruleNames";

export default class TermsNode extends NonTerminalNode {
  getTermNodes() {
    const ruleName = TERM_RULE_NAME,
          termNodes = this.getNodesByRuleName(ruleName);

    return termNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermsNode, ruleName, childNodes, opacity, precedence); }
}
