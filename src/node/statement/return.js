"use strict";

import StatementNode from "../../node/statement";

import { TERM_RULE_NAME } from "../../ruleNames";

export default class ReturnStatementNode extends StatementNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return StatementNode.fromRuleNameChildNodesOpacityAndPrecedence(ReturnStatementNode, ruleName, childNodes, opacity, precedence); }
}
