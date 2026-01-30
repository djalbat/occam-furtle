"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { EVERY_RULE_NAME, ANONYMOUS_PROCEDURE_RULE_NAME } from "../ruleNames";

export default class QueryNode extends NonTerminalNode {
  getVariableNode() {
    const ruleName = EVERY_RULE_NAME,
          everyNode = this.getNodeByRuleName(ruleName);

    return everyNode;
  }

  getAnonymousProcedureNode() {
    const ruleName = ANONYMOUS_PROCEDURE_RULE_NAME,
          anonymousProcedureNode = this.getNodeByRuleName(ruleName);

    return anonymousProcedureNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(QueryNode, ruleName, childNodes, opacity, precedence); }
}
