"use strict";

import { NonTerminalNode } from "occam-languages";

export default class NonsenseNode extends NonTerminalNode {
  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(NonsenseNode, ruleName, childNodes, precedence, opacity); }
}
