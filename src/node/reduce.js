"use strict";

import { NonTerminalNode } from "occam-languages";

import { VALUE_RULE_NAME, VARIABLE_RULE_NAME, ANONYMOUS_PROCEDURE_RULE_NAME } from "../ruleNames";

export default class ReduceNode extends NonTerminalNode {
  getValueNode() {
    const ruleName = VALUE_RULE_NAME,
          valueNode = this.getNodeByRuleName(ruleName);

    return valueNode;
  }

  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getAnonymousProcedureNode() {
    const ruleName = ANONYMOUS_PROCEDURE_RULE_NAME,
          anonymousProcedureNode = this.getNodeByRuleName(ruleName);

    return anonymousProcedureNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReduceNode, ruleName, childNodes, precedence, opacity); }
}
