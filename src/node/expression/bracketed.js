"use strict";

import ExpressionNode from "../../node/expression";

import { EXPRESSION_RULE_NAME } from "../../ruleNames";

export default class BracketedExpressionNode extends ExpressionNode {
  getExpressionNode() {
    const ruleName = EXPRESSION_RULE_NAME,
          expressionNode = this.getNodeByRuleName(ruleName);

    return expressionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return ExpressionNode.fromRuleNameChildNodesOpacityAndPrecedence(BracketedExpressionNode, ruleName, childNodes, opacity, precedence); }
}
