"use strict";

import { arrayUtilities } from "necessary";

import NonTerminalNode from "../nonTerminalNode";

import { NOT_EQUAL_TO } from "../constants";
import { SPECIAL_TOKEN_TYPE } from "../tokenTypes";
import { EXPRESSION_RULE_NAME } from "../ruleNames";

const { first, second } = arrayUtilities;

export default class ComparisonNode extends NonTerminalNode {
  isNegated() {
    let negated = false;

    const tokenType = SPECIAL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === NOT_EQUAL_TO) {
        negated = true;
      }

      return true;
    }, tokenType);

    return negated;
  }

  getExpressionNodes() {
    const ruleName = EXPRESSION_RULE_NAME,
      expressionNodes = this.getNodesByRuleName(ruleName);

    return expressionNodes;
  }

  getLeftExpressionNode() {
    const firstExpressionNode = this.getFirstExpressionNode(),
          leftExpressionNode = firstExpressionNode; ///

    return leftExpressionNode;
  }

  getRightExpressionNode() {
    const secondExpressionNode = this.getSecondExpressionNode(),
          rightExpressionNode = secondExpressionNode;  ///

    return rightExpressionNode;
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ComparisonNode, ruleName, childNodes, opacity, precedence); }
}
