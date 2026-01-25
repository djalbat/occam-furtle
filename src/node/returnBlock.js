"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class ReturnBlockNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReturnBlockNode, ruleName, childNodes, opacity, precedence); }
}
