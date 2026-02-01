"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { PRIMITIVE_RULE_NAME } from "../ruleNames";

export default class PrimitivesNode extends NonTerminalNode {
  getExpressionNodes() {
    const ruleName = PRIMITIVE_RULE_NAME,
          primitiveNodes = this.getNodesByRuleName(ruleName);

    return primitiveNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PrimitivesNode, ruleName, childNodes, opacity, precedence); }
}
