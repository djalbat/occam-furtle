"use strict";

import nullNode from "../nullNode";
import NonTerminalNode from "../nonTerminalNode";

import { NULL, TRUE, FALSE } from "../constants";
import { PRIMITIVE_TOKEN_TYPE } from "../tokenTypes";
import { SOME_RULE_NAME, BITWISE_EXPRESSION_RULE_NAME } from "../ruleNames";

export default class ExpressionNode extends NonTerminalNode {
  getNode() {
    let node = null;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              terminalNodeType = terminalNode.getType();

        if (terminalNodeType === PRIMITIVE_TOKEN_TYPE) {
          const content = terminalNode.getContent();

          if (content === NULL) {
            node = nullNode;

            return true;
          }
        }
      }
    });

    return node;
  }

  getBoolean() {
    let boolean = null;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              terminalNodeType = terminalNode.getType();

        if (terminalNodeType === PRIMITIVE_TOKEN_TYPE) {
          const content = terminalNode.getContent();

          if (content === TRUE) {
            boolean = true;

            return true;
          }

          if (content === FALSE) {
            boolean = false;

            return true;
          }
        }
      }
    });

    return boolean;
  }

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
