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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AssignmentrNode.fromRuleNameChildNodesOpacityAndPrecedence(ObjectAssignmentNode, ruleName, childNodes, opacity, precedence); }
}
