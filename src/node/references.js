"use strict";

import { NonTerminalNode } from "occam-languages";

import { REFERENCE_RULE_NAME } from "../ruleNames";

export default class ReferencesNode extends NonTerminalNode {
  getReferenceNodes() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNodes = this.getNodesByRuleName(ruleName);

    return referenceNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReferencesNode, ruleName, childNodes, opacity, precedence); }
}
