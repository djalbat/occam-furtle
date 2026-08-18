"use strict";

import { NonTerminalNode } from "occam-languages";

import { LIST_ASSIGNMENT_RULE_NAME, OBJECT_ASSIGNMENT_RULE_NAME, VARIABLE_ASSIGNMENTS_RULE_NAME } from "../ruleNames"

export default class StatementNode extends NonTerminalNode {
  getListAssignmentNode() {
    const ruleName = LIST_ASSIGNMENT_RULE_NAME,
          listAssignmentNode = this.getNodeByRuleName(ruleName);

    return listAssignmentNode;
  }

  getObjectAssignmentNode() {
    const ruleName = OBJECT_ASSIGNMENT_RULE_NAME,
          objectAssignmentNode = this.getNodeByRuleName(ruleName);

    return objectAssignmentNode;
  }

  getVariableAssignmentsNode() {
    const ruleName = VARIABLE_ASSIGNMENTS_RULE_NAME,
          variableAssignmentsNode = this.getNodeByRuleName(ruleName);

    return variableAssignmentsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StatementNode, ruleName, childNodes, opacity, precedence); }
}
