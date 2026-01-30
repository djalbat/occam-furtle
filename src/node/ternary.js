"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../nonTerminalNode";

import { EXPRESSION_RULE_NAME } from "../ruleNames";

const { first, second, third } = arrayUtilities;

export default class TernaryNode extends NonTerminalNode {
  getExpressionNodes() {
    const ruleName = EXPRESSION_RULE_NAME,
          expressionNodes = this.getNodesByRuleName(ruleName);

    return expressionNodes;
  }

  getExpressionNode() {
    const firstExpressionNode = this.getFirstExpressionNode(),
          expressionNode = firstExpressionNode; ///

    return expressionNode;
  }

  getIfExpressionNode() {
    const secondExpressionNode = this.getSecondExpressionNode(),
          ifExpressionNode = secondExpressionNode;  ///

    return ifExpressionNode;
  }

  getElseExpressionNode() {
    const thirdExpressionNode = this.getThirdExpressionNode(),
          elseExpressionNode = thirdExpressionNode; ///

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

  getThirdExpressionNode() {
    const expressionNodes = this.getExpressionNodes(),
          thirdExpressionNode = third(expressionNodes);

    return thirdExpressionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TernaryNode, ruleName, childNodes, opacity, precedence); }
}
