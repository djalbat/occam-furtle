"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { VARIABLE_RULE_NAME, PRIMITIVE_RULE_NAME } from "../ruleNames";

export default class ValueNode extends NonTerminalNode {
  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getPrimitiveNode() {
    const ruleName = PRIMITIVE_RULE_NAME,
          primitiveNode = this.getNodeByRuleName(ruleName);

    return primitiveNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ValueNode, ruleName, childNodes, opacity, precedence); }
}
