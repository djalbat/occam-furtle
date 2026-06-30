"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { ARRAY_ASSIGNMENT_RULE_NAME, OBJECT_ASSIGNMENT_RULE_NAME, VARIABLE_ASSIGNMENTS_RULE_NAME } from "../ruleNames"

export default class StepNode extends NonTerminalNode {
  getArrayAssignmentNode() {
    const ruleName = ARRAY_ASSIGNMENT_RULE_NAME,
          arrayAssignmentNode = this.getNodeByRuleName(ruleName);

    return arrayAssignmentNode;
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence); }
}
