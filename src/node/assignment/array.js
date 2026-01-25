"use strict";

import AssignmentrNode from "../../node/assignment";

export default class ArrayAssignmentNode extends AssignmentrNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AssignmentrNode.fromRuleNameChildNodesOpacityAndPrecedence(ArrayAssignmentNode, ruleName, childNodes, opacity, precedence); }
}
