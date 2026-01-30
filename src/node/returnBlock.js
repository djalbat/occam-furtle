"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { STEP_RULE_NAME, NONSENSE_RULE_NAME, RETURN_STATEMENT_RULE_NAME } from "../ruleNames";

export default class ReturnBlockNode extends NonTerminalNode {
  isNonsensical() {
    const nonsenseNodes = this.getNonsenseNodes(),
          nonsenseNodesLength = nonsenseNodes.length,
          nonsensical = (nonsenseNodesLength > 0);

    return nonsensical;
  }

  getStepNodes() {
    const ruleName = STEP_RULE_NAME,
          stepNodes = this.getNodesByRuleName(ruleName);

    return stepNodes;
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReturnBlockNode, ruleName, childNodes, opacity, precedence); }
}
