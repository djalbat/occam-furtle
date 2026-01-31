"use strict";

import AssignmentrNode from "../../node/assignment";

import { VARIABLE_RULE_NAME, PARAMETERS_RULE_NAME } from "../../ruleNames";

export default class ArrayAssignmentNode extends AssignmentrNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getParametersNode() {
    const ruleName = PARAMETERS_RULE_NAME,
          parametersNode = this.getNodeByRuleName(ruleName);

    return parametersNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AssignmentrNode.fromRuleNameChildNodesOpacityAndPrecedence(ArrayAssignmentNode, ruleName, childNodes, opacity, precedence); }
}
