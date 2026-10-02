"use strict";

import { NonTerminalNode } from "occam-languages";

import { LABEL_RULE_NAME, REFERENCE_RULE_NAME } from "../ruleNames";

export default class ImportBindingNode extends NonTerminalNode {
  getLabelNode() {
    const ruleName = LABEL_RULE_NAME,
          labelNode = this.getNodeByRuleName(ruleName);

    return labelNode;
  }

  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referendeNode = this.getNodeByRuleName(ruleName);

    return referendeNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ImportBindingNode, ruleName, childNodes, precedence, opacity); }
}
