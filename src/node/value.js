"use strict";

import { NonTerminalNode } from "occam-languages";

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

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ValueNode, ruleName, childNodes, precedence, opacity); }
}
