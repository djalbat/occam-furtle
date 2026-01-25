"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class ExpressionNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ExpressionNode, ruleName, childNodes, opacity, precedence); }
}
