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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ImportBindingNode, ruleName, childNodes, opacity, precedence); }
}
