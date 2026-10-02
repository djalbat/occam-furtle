"use strict";

import { NonTerminalNode } from "occam-languages";

import { VALUES_RULE_NAME, REFERENCE_RULE_NAME } from "../ruleNames";

export default class ProcedureCallNode extends NonTerminalNode {
  getValuesNode() {
    const ruleName = VALUES_RULE_NAME,
          valuesNode = this.getNodeByRuleName(ruleName);

    return valuesNode;
  }

  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNode = this.getNodeByRuleName(ruleName);

    return referenceNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ProcedureCallNode, ruleName, childNodes, precedence, opacity); }
}
