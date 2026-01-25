"use strict";

import AssignmentrNode from "../../node/assignment";

export default class ObjectAssignmentNode extends AssignmentrNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ObjectAssignmentNode, ruleName, childNodes, opacity, precedence); }
}
