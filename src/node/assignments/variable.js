"use strict";

import AssignmentsNode from "../../node/assignment";

export default class VariableAssignmentsNode extends AssignmentsNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AssignmentsNode.fromRuleNameChildNodesOpacityAndPrecedence(VariableAssignmentsNode, ruleName, childNodes, opacity, precedence); }
}
