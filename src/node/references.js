"use strict";

import { NonTerminalNode } from "occam-languages";

import { REFERENCE_RULE_NAME } from "../ruleNames";

export default class ReferencesNode extends NonTerminalNode {
  getReferenceNodes() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNodes = this.getNodesByRuleName(ruleName);

    return referenceNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReferencesNode, ruleName, childNodes, precedence, opacity); }
}
