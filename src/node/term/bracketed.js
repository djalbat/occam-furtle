"use strict";

import TermNode from "../../node/term";

import { TERM_RULE_NAME } from "../../ruleNames";

export default class BracketedTermNode extends TermNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return TermNode.fromRuleNameChildNodesPrecedenceAndOpacity(BracketedTermNode, ruleName, childNodes, precedence, opacity); }
}
