"use strict";

import NonTerminalNode from "../nonTerminalNode";

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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReduceNode, ruleName, childNodes, opacity, precedence); }
}
