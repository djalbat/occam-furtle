"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { ANONYMOUS_PROCEDURE_RULE_NAME } from "../ruleNames";

export default class ReduceNode extends NonTerminalNode {
  getAnonymousProcedureNode() {
    const ruleName = ANONYMOUS_PROCEDURE_RULE_NAME,
          anonymousProcedureNode = this.getNodeByRuleName(ruleName);

    return anonymousProcedureNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReduceNode, ruleName, childNodes, opacity, precedence); }
}
