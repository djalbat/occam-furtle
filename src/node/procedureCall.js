"use strict";

import { NonTerminalNode } from "occam-languages";

import { TERMS_RULE_NAME, REFERENCE_RULE_NAME } from "../ruleNames";

export default class ProcedureCallNode extends NonTerminalNode {
  getTermsNode() {
    const ruleName = TERMS_RULE_NAME,
          termsNode = this.getNodeByRuleName(ruleName);

    return termsNode;
  }

  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNode = this.getNodeByRuleName(ruleName);

    return referenceNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureCallNode, ruleName, childNodes, opacity, precedence); }
}
