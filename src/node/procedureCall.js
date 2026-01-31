"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { REFERENCE_RULE_NAME, EXPRESSIONS_RULE_NAME } from "../ruleNames";

export default class ProcedureCallNode extends NonTerminalNode {
  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNode = this.getNodeByRuleName(ruleName);

    return referenceNode;
  }

  getExpressionsNode() {
    const ruleName = EXPRESSIONS_RULE_NAME,
      expressionsNode = this.getNodeByRuleName(ruleName);

    return expressionsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureCallNode, ruleName, childNodes, opacity, precedence); }
}
