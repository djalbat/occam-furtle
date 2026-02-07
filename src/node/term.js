"use strict";

import { NonTerminalNode } from "occam-languages";

import { VARIABLE_RULE_NAME,
         PRIMITIVE_RULE_NAME,
         NEGATED_TERM_RULE_NAME,
         LOGICAL_TERM_RULE_NAME,
         BRACKETED_TERM_RULE_NAME,
         COMPARISON_TERM_RULE_NAME } from "../ruleNames";

export default class TermNode extends NonTerminalNode {
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

  getNegatedTermNode() {
    const ruleName = NEGATED_TERM_RULE_NAME,
          negatedTermNode = this.getNodeByRuleName(ruleName);

    return negatedTermNode;
  }

  getLogicalTermNode() {
    const ruleName = LOGICAL_TERM_RULE_NAME,
          logicalTermRuleName = this.getNodeByRuleName(ruleName);

    return logicalTermRuleName;
  }

  getBracketedTermNode() {
    const ruleName = BRACKETED_TERM_RULE_NAME,
          bracketedTermRuleName = this.getNodeByRuleName(ruleName);

    return bracketedTermRuleName;
  }

  getComparisonTermNode() {
    const ruleName = COMPARISON_TERM_RULE_NAME,
          comparisonNode = this.getNodeByRuleName(ruleName);

    return comparisonNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = TermNode;
    }

    const termNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return termNode;
  }
}
