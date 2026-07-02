"use strict";

import { NonTerminalNode } from "occam-languages";

import { VARIABLE_RULE_NAME, ANONYMOUS_PROCEDURE_RULE_NAME } from "../ruleNames";

export default class SomeNode extends NonTerminalNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variabloeNode = this.getNodeByRuleName(ruleName);

    return variabloeNode;
  }

  getAnonymousProcedureNode() {
    const ruleName = ANONYMOUS_PROCEDURE_RULE_NAME,
          anonymousProcedureNode = this.getNodeByRuleName(ruleName);

    return anonymousProcedureNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SomeNode, ruleName, childNodes, opacity, precedence); }
}
