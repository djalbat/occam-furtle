"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class DeclarationNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DeclarationNode, ruleName, childNodes, opacity, precedence); }
}
