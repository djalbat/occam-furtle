"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class QueryNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(QueryNode, ruleName, childNodes, opacity, precedence); }
}
