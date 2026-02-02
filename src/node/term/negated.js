"use strict";

import TermNode from "../../node/term";

import { TERM_RULE_NAME } from "../../ruleNames";

export default class NegatedTermNode extends TermNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TermNode.fromRuleNameChildNodesOpacityAndPrecedence(NegatedTermNode, ruleName, childNodes, opacity, precedence); }
}
