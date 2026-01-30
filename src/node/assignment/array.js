"use strict";

import AssignmentrNode from "../../node/assignment";

import { PARAMETERS_RULE_NAME } from "../../ruleNames";

export default class ArrayAssignmentNode extends AssignmentrNode {
  getParametersNode() {
    const ruleName = PARAMETERS_RULE_NAME,
          parametersNode = this.getNodeByRuleName(ruleName);

    return parametersNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AssignmentrNode.fromRuleNameChildNodesOpacityAndPrecedence(ArrayAssignmentNode, ruleName, childNodes, opacity, precedence); }
}
