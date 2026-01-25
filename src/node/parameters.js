"use strict";

import { NonTerminalNode } from "occam-furtle";

export default class ParamtersNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParamtersNode, ruleName, childNodes, opacity, precedence); }
}
