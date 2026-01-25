"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class ParamterNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParamterNode, ruleName, childNodes, opacity, precedence); }
}
