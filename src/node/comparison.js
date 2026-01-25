"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class ComparisonNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ComparisonNode, ruleName, childNodes, opacity, precedence); }
}
