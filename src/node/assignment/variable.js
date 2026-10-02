"use strict";

import AssignmentrNode from "../../node/assignment";

import { VARIABLE_RULE_NAME, EXPRESSION_RULE_NAME } from "../../ruleNames";

export default class VariableAssignmentNode extends AssignmentrNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getExpressionNode() {
    const ruleName = EXPRESSION_RULE_NAME,
          expressionNode = this.getNodeByRuleName(ruleName);

    return expressionNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return AssignmentrNode.fromRuleNameChildNodesPrecedenceAndOpacity(VariableAssignmentNode, ruleName, childNodes, precedence, opacity); }
}
