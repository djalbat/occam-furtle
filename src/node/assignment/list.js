"use strict";

import AssignmentrNode from "../../node/assignment";

import { VARIABLE_RULE_NAME, BINDINGS_RULE_NAME } from "../../ruleNames";

export default class ListAssignmentNode extends AssignmentrNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getBindingsNode() {
    const ruleName = BINDINGS_RULE_NAME,
          parametersNode = this.getNodeByRuleName(ruleName);

    return parametersNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return AssignmentrNode.fromRuleNameChildNodesPrecedenceAndOpacity(ListAssignmentNode, ruleName, childNodes, precedence, opacity); }
}
