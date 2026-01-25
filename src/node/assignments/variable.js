"use strict";

import AssignmentrsNode from "../../node/assignment";

export default class VariableAssignmentsNode extends AssignmentrsNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(VariableAssignmentsNode, ruleName, childNodes, opacity, precedence); }
}
