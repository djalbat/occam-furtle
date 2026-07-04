"use strict";

import { NonTerminalNode } from "occam-languages";

import { TYPE_RULE_NAME, LABEL_RULE_NAME, PARAMETERS_RULE_NAME, RETURN_BLOCK_RULE_NAME } from "../ruleNames";

export default class ProcedureNode extends NonTerminalNode {
  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          labelNode = this.getNodeByRuleName(ruleName);

    return labelNode;
  }

  getLabelNode() {
    const ruleName = LABEL_RULE_NAME,
          labelNode = this.getNodeByRuleName(ruleName);

    return labelNode;
  }

  getParametersNode() {
    const ruleName = PARAMETERS_RULE_NAME,
          parametersNode = this.getNodeByRuleName(ruleName);

    return parametersNode;
  }

  getReturnBlockNode() {
    const ruleName = RETURN_BLOCK_RULE_NAME,
          returnBlockNode = this.getNodeByRuleName(ruleName);

    return returnBlockNode;
  }

  matchLabelNode(labelNode) {
    let labelNodeMatches;

    const labelNodeA = labelNode; ///

    labelNode = this.getLabelNode();

    const labelNodeB = labelNode; ///

    labelNodeMatches = labelNodeA.match(labelNodeB);  ///

    return labelNodeMatches;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureNode, ruleName, childNodes, opacity, precedence); }
}
