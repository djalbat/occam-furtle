"use strict";

import AssignmentsNode from "../../node/assignment";

import { TYPE_RULE_NAME, VARIABLE_ASSIGNMENT_RULE_NAME } from "../../ruleNames";

export default class VariableAssignmentsNode extends AssignmentsNode {
  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
  }

  getVariableAssignmentNodes() {
    const ruleName = VARIABLE_ASSIGNMENT_RULE_NAME,
          variableAssingnmentNodss = this.getNodesByRuleName(ruleName);

    return variableAssingnmentNodss;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return AssignmentsNode.fromRuleNameChildNodesPrecedenceAndOpacity(VariableAssignmentsNode, ruleName, childNodes, precedence, opacity); }
}
