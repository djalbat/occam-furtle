"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class ParamterNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParamterNode, ruleName, childNodes, opacity, precedence); }
}
