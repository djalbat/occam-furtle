"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { VARIABLE_RULE_NAME } from "../ruleNames";
import { STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";

export default class NodesQueryNode extends NonTerminalNode {
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

  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NodesQueryNode, ruleName, childNodes, opacity, precedence); }
}
