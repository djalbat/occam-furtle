"use strict";

import { NonTerminalNode } from "occam-languages";

import { REFERENCES_RULE_NAME } from "../ruleNames";

export default class ReferencesListLiteralNode extends NonTerminalNode {
  getReferenceNodes() {
    const referencesNode = this.getReferencesNode(),
          referenceNodes = referencesNode.getReferenceNodes();

    return referenceNodes;
  }

  getReferencesNode() {
    const ruleName = REFERENCES_RULE_NAME,
          referencesNode = this.getNodeByRuleName(ruleName);

    return referencesNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReferencesListLiteralNode, ruleName, childNodes, precedence, opacity); }
}
