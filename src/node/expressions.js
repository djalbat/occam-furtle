"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class ExpressionsNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ExpressionsNode, ruleName, childNodes, opacity, precedence); }
}
