"use strict";

import { NonTerminalNode } from "occam-languages";

import { STATEMENT_RULE_NAME, NONSENSE_RULE_NAME, RETURN_STATEMENT_RULE_NAME } from "../ruleNames";

export default class ReturnBlockNode extends NonTerminalNode {
  isNonsensical() {
    const nonsenseNodes = this.getNonsenseNodes(),
          nonsenseNodesLength = nonsenseNodes.length,
          nonsensical = (nonsenseNodesLength > 0);

    return nonsensical;
  }

  getStatementNodes() {
    const ruleName = STATEMENT_RULE_NAME,
          statementNodes = this.getNodesByRuleName(ruleName);

    return statementNodes;
  }

  getNonsenseNodes() {
    const ruleName = NONSENSE_RULE_NAME,
          nonsenseNodes = this.getNodesByRuleName(ruleName);

      return nonsenseNodes;
  }

  getReturnStatementNode() {
    const ruleName = RETURN_STATEMENT_RULE_NAME,
          returnStatement = this.getNodeByRuleName(ruleName);

    return returnStatement;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ReturnBlockNode, ruleName, childNodes, precedence, opacity); }
}
