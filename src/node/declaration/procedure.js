"use strict";

import DeclarationNode from "../../node/declaration";

import { TYPE_TOKEN_TYPE } from "../../tokenTypes";
import { LABEL_RULE_NAME, PARAMETERS_RULE_NAME, RETURN_BLOCK_RULE_NAME } from "../../ruleNames";

export default class ProcedureDeclarationNode extends DeclarationNode {
  getType() {
    let type;

    const tokenType = TYPE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      type = content;  ///
    }, tokenType);

    return type;
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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return DeclarationNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
