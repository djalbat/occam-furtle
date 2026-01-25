"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class ReduceNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReduceNode, ruleName, childNodes, opacity, precedence); }
}
