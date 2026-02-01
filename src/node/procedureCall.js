"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { REFERENCE_RULE_NAME, PRIMITIVES_RULE_NAME } from "../ruleNames";

export default class ProcedureCallNode extends NonTerminalNode {
  getReferenceNode() {
    const ruleName = REFERENCE_RULE_NAME,
          referenceNode = this.getNodeByRuleName(ruleName);

    return referenceNode;
  }

  getPrimitivesNode() {
    const ruleName = PRIMITIVES_RULE_NAME,
          primitivesNode = this.getNodeByRuleName(ruleName);

    return primitivesNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureCallNode, ruleName, childNodes, opacity, precedence); }
}
