"use strict";

import { arrayUtilities } from "necessary";

import ExpressionNode from "../../node/expression";

import { SPECIAL_TOKEN_TYPE } from "../../tokenTypes";
import { EXPRESSION_RULE_NAME } from "../../ruleNames";
import { CONJUNCTION_OPERATOR, DISJUNCTION_OPERATOR } from "../../constants";

const { first, last } = arrayUtilities;

export default class LogicalExpressionNode extends ExpressionNode {
  getOperator() {
    let operator = null;

    const tokenType = SPECIAL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      operator = content; ///

      return true;
    }, tokenType);

    return operator;
  }

  isConjection() {
    const operator = this.getOperator(),
          conjection = (operator === CONJUNCTION_OPERATOR);

    return conjection;
  }

  isDisjunction() {
    const operator = this.getOperator(),
          disjunction = (operator === DISJUNCTION_OPERATOR);

    return disjunction;
  }

  getExpressionNodes() {
    const ruleName = EXPRESSION_RULE_NAME,
          expressionNodes = this.getNodesByRuleName(ruleName);

    return expressionNodes;
  }

  getLeftExpressionNode() {
    const firstExpresionNode = this.getFirstExpressionNode(),
          leftExpressionNode = firstExpresionNode;  ///

    return leftExpressionNode;
  }

  getRightExpressionNode() {
    const lastExpressionNode = this.getLastExpressionNode(),
          rightExpressionNode = lastExpressionNode; ///

    return rightExpressionNode;
  }

  getLastExpressionNode() {
    const expressionNodes = this.getExpressionNodes(),
          lastExpressionNode = last(expressionNodes);

    return lastExpressionNode;
  }

  getFirstExpressionNode() {
    const expressionNodes = this.getExpressionNodes(),
          firstExpressionNode = first(expressionNodes);

    return firstExpressionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return ExpressionNode.fromRuleNameChildNodesOpacityAndPrecedence(LogicalExpressionNode, ruleName, childNodes, opacity, precedence); }
}
