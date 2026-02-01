"use strict";

import StatementNode from "../../node/statement";

import { PRIMITIVE_RULE_NAME } from "../../ruleNames";

export default class ReturnStatementNode extends StatementNode {
  getPrimitiveNode() {
    const ruleName = PRIMITIVE_RULE_NAME,
          expressionNode = this.getNodeByRuleName(ruleName);

    return expressionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return StatementNode.fromRuleNameChildNodesOpacityAndPrecedence(ReturnStatementNode, ruleName, childNodes, opacity, precedence); }
}
