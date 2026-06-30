"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { VARIABLE_RULE_NAME } from "../ruleNames";

export default class LengthOfNode extends NonTerminalNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(LengthOfNode, ruleName, childNodes, opacity, precedence); }
}
