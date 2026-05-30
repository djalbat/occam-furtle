"use strict";

import ProcedureNode from "../../node/procedure";

import { TYPE_RULE_NAME, PARAMETERS_RULE_NAME, RETURN_BLOCK_RULE_NAME } from "../../ruleNames";

export default class AnonymousProcedureNode extends ProcedureNode {
  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return ProcedureNode.fromRuleNameChildNodesOpacityAndPrecedence(AnonymousProcedureNode, ruleName, childNodes, opacity, precedence); }
}
