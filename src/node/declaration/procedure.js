"use strict";

import DeclarationNode from "../../node/declaration";

import { PARAMETERS_RULE_NAME } from "../../ruleNames";

export default class ProcedureDeclarationNode extends DeclarationNode {
  getParametersNode() {
    const ruleName = PARAMETERS_RULE_NAME,
          parametersNode = this.getNodeByRuleName(ruleName);

    return parametersNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return DeclarationNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
