"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class ReferenceNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReferenceNode, ruleName, childNodes, opacity, precedence); }
}
