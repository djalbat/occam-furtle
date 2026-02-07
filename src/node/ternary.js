"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-languages";

import { TERM_RULE_NAME, EXPRESSION_RULE_NAME } from "../ruleNames";

const { first, second } = arrayUtilities;

export default class TernaryNode extends NonTerminalNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  getExpressionNodes() {
    const ruleName = EXPRESSION_RULE_NAME,
          expressionNodes = this.getNodesByRuleName(ruleName);

    return expressionNodes;
  }

  getIfExpressionNode() {
    const firstExpressionNode = this.getFirstExpressionNode(),
          ifExpressionNode = firstExpressionNode;  ///

    return ifExpressionNode;
  }

  getElseExpressionNode() {
    const secondExpressionNode = this.getSecondExpressionNode(),
          elseExpressionNode = secondExpressionNode; ///

    return elseExpressionNode;
  }

  getFirstExpressionNode() {
    const expressionNodes = this.getExpressionNodes(),
          firstExpressionNode = first(expressionNodes);

    return firstExpressionNode;
  }

  getSecondExpressionNode() {
    const expressionNodes = this.getExpressionNodes(),
          secondExpressionNode = second(expressionNodes);

    return secondExpressionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TernaryNode, ruleName, childNodes, opacity, precedence); }
}
