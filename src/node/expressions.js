"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { EXPRESSION_RULE_NAME } from "../ruleNames";

export default class ExpressionsNode extends NonTerminalNode {
  getExpressionNodes() {
    const ruleName = EXPRESSION_RULE_NAME,
          expressionNodes = this.getNodesByRuleName(ruleName);

    return expressionNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ExpressionsNode, ruleName, childNodes, opacity, precedence); }
}
