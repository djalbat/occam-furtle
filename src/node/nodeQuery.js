"use strict";

import { NonTerminalNode } from "occam-languages";

import { VARIABLE_RULE_NAME } from "../ruleNames";
import { stringFromStringLiteral } from "../utilities/stringLiteral";
import { STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";

export default class NodeQueryNode extends NonTerminalNode {
  getString() {
    const stringLiteral = this.getStringLiteral(),
          string = stringFromStringLiteral(stringLiteral);

    return string;
  }

  getStringLiteral() {
    let stringLiteral;

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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(NodeQueryNode, ruleName, childNodes, opacity, precedence); }
}
