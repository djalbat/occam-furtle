"use strict";

import { NonTerminalNode } from "occam-languages";

import { VARIABLE_RULE_NAME, ANONYMOUS_PROCEDURE_RULE_NAME } from "../ruleNames";

export default class EveryNode extends NonTerminalNode {
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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(EveryNode, ruleName, childNodes, precedence, opacity); }
}
