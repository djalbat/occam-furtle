"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class SomeNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SomeNode, ruleName, childNodes, opacity, precedence); }
}
