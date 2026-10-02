"use strict";

import AssignmentrNode from "../../node/assignment";

import { VARIABLE_RULE_NAME, NAMED_BINDINGS_RULE_NAME } from "../../ruleNames";

export default class ObjectAssignmentNode extends AssignmentrNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getNamedBindingsNode() {
    const ruleName = NAMED_BINDINGS_RULE_NAME,
          namedBindingsNode = this.getNodeByRuleName(ruleName);

    return namedBindingsNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return AssignmentrNode.fromRuleNameChildNodesPrecedenceAndOpacity(ObjectAssignmentNode, ruleName, childNodes, precedence, opacity); }
}
