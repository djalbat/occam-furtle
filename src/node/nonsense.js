"use strict";

import { NonTerminalNode } from "occam-languages";

export default class NonsenseNode extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NonsenseNode, ruleName, childNodes, opacity, precedence); }
}
