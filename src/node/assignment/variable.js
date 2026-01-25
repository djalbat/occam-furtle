"use strict";

import AssignmentrNode from "../../node/assignment";

export default class VariableAssignmentNode extends AssignmentrNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(VariableAssignmentNode, ruleName, childNodes, opacity, precedence); }
}
