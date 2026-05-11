"use strict";

import StatementNode from "../../node/statement";

import { VALUE_RULE_NAME } from "../../ruleNames";

export default class ReturnStatementNode extends StatementNode {
  getValueNode() {
    const ruleName = VALUE_RULE_NAME,
          valueNode = this.getNodeByRuleName(ruleName);

    return valueNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return StatementNode.fromRuleNameChildNodesOpacityAndPrecedence(ReturnStatementNode, ruleName, childNodes, opacity, precedence); }
}
