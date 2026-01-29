"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { SOME_RULE_NAME, BITWISE_EXPRESSION_RULE_NAME } from "../ruleNames";

export default class ExpressionNode extends NonTerminalNode {
  getSomeNode() {
    const ruleName = SOME_RULE_NAME,
          someNode = this.getNodeByRuleName(ruleName);

    return someNode;
  }

  getBitwiseExpressionNode() {
    const ruleName = BITWISE_EXPRESSION_RULE_NAME,
          bitwiseExpressionRuleName = this.getNodeByRuleName(ruleName);

    return bitwiseExpressionRuleName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = ExpressionNode;
    }

    const expressionNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return expressionNode;
  }
}
