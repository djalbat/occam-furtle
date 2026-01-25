"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class ParamtersNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParamtersNode, ruleName, childNodes, opacity, precedence); }
}
