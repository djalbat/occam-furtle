"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class ProcedureNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureNode, ruleName, childNodes, opacity, precedence); }
}
