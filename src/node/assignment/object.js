"use strict";

import AssignmentrNode from "../../node/assignment";

import { VARIABLE_RULE_NAME, NAMED_PARAMETERS_RULE_NAME } from "../../ruleNames";

export default class ObjectAssignmentNode extends AssignmentrNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getNamedParametersNode() {
    const ruleName = NAMED_PARAMETERS_RULE_NAME,
          namedParametersNode = this.getNodeByRuleName(ruleName);

    return namedParametersNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AssignmentrNode.fromRuleNameChildNodesOpacityAndPrecedence(ObjectAssignmentNode, ruleName, childNodes, opacity, precedence); }
}
