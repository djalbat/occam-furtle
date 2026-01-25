"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class VariableNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(VariableNode, ruleName, childNodes, opacity, precedence); }
}
