"use strict";

import nullNode from "../nullNode";
import NonTerminalNode from "../nonTerminalNode";

import { NULL, TRUE, FALSE, EMPTY_STRING } from "../constants";
import { NUMBER_TOKEN_TYPE, PRIMITIVE_TOKEN_TYPE, STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";
import { SOME_RULE_NAME,
         EVERY_RULE_NAME,
         REDUCE_RULE_NAME,
         TERNARY_RULE_NAME,
         VARIABLE_RULE_NAME,
         NODE_QUERY_RULE_NAME,
         NODES_QUERY_RULE_NAME,
         NEGATED_EXPRESSION_RULE_NAME,
         LOGICAL_EXPRESSION_RULE_NAME,
         BRACKETED_EXPRESSION_RULE_NAME } from "../ruleNames";

export default class ExpressionNode extends NonTerminalNode {
  getNode() {
    let node = null;

    const tokenType = PRIMITIVE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === NULL) {
        node = nullNode;

        return true;
      }
    }, tokenType);

    return node;
  }

  getStringLiteral() {
    let stringLiteral = null;

    const tokenType = STRING_LITERAL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      stringLiteral = content;  ///

      return true;
    }, tokenType);

    return stringLiteral;
  }

  getNumber() {
    let number = null;

    const tokenType = NUMBER_TOKEN_TYPE; ///

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === TRUE) {
        number = Number(content);

        return true;
      }
    }, tokenType);

    return number;
  }

  getBoolean() {
    let boolean = null;

    const tokenType = PRIMITIVE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === TRUE) {
        boolean = true;

        return true;
      }

      if (content === FALSE) {
        boolean = false;

        return true;
      }
    }, tokenType);

    return boolean;
  }

  getSomeNode() {
    const ruleName = SOME_RULE_NAME,
          someNode = this.getNodeByRuleName(ruleName);

    return someNode;
  }

  getEveryNode() {
    const ruleName = EVERY_RULE_NAME,
          everyNode = this.getNodeByRuleName(ruleName);

    return everyNode;
  }

  getReduceNode() {
    const ruleName = REDUCE_RULE_NAME,
          reduceNode = this.getNodeByRuleName(ruleName);

    return reduceNode;
  }

  getTernaryNode() {
    const ruleName = TERNARY_RULE_NAME,
          ternaryNode = this.getNodeByRuleName(ruleName);

    return ternaryNode;
  }

  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getNodeQueryNode() {
    const ruleName = NODE_QUERY_RULE_NAME,
          nodeQueryNode = this.getNodeByRuleName(ruleName);

    return nodeQueryNode;
  }

  getNodesQueryNode() {
    const ruleName = NODES_QUERY_RULE_NAME,
          nodeSQueryNode = this.getNodeByRuleName(ruleName);

    return nodeSQueryNode;
  }

  getNegatedExpressionNode() {
    const ruleName = NEGATED_EXPRESSION_RULE_NAME,
          negatedExpressionNode = this.getNodeByRuleName(ruleName);

    return negatedExpressionNode;
  }

  getLogicalExpressionNode() {
    const ruleName = LOGICAL_EXPRESSION_RULE_NAME,
          logicalExpressionRuleName = this.getNodeByRuleName(ruleName);

    return logicalExpressionRuleName;
  }

  getBracketedExpressionNode() {
    const ruleName = BRACKETED_EXPRESSION_RULE_NAME,
          bracketedExpressionRuleName = this.getNodeByRuleName(ruleName);

    return bracketedExpressionRuleName;
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
