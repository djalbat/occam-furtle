"use strict";

import { NonTerminalNode } from "occam-languages";

import { VALUES_RULE_NAME, VARIABLE_RULE_NAME, REFERENCE_LIST_LITERAL_RULE_NAME } from "../ruleNames";

export default class ExistsNode extends NonTerminalNode {
  getReferencesNode() {
    const referenceListLiteralNode = this.getReferenceListLiteralNode(),
          referencesNode = referenceListLiteralNode.getReferencesNode();

    return referencesNode;
  }

  getValueNodes() {
    const valuesNode = this.getValuesNode(),
          valueNodes = valuesNode.getValueNodes();

    return valueNodes;
  }

  getValuesNode() {
    const ruleName = VALUES_RULE_NAME,
          valuesNode = this.getNodeByRuleName(ruleName);

    return valuesNode;
  }

  getVariableNode() {
    const ruleName = VARIABLE_RULE_NAME,
          variableNode = this.getNodeByRuleName(ruleName);

    return variableNode;
  }

  getReferenceListLiteralNode() {
    const ruleName = REFERENCE_LIST_LITERAL_RULE_NAME,
          referenceListLiteralNode = this.getNodeByRuleName(ruleName);

    return referenceListLiteralNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ExistsNode, ruleName, childNodes, opacity, precedence); }
}
