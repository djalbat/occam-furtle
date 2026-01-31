"use strict";

import ProcedureNode from "../../node/procedure";

import { TYPE_TOKEN_TYPE } from "../../tokenTypes";
import { PARAMETERS_RULE_NAME, RETURN_BLOCK_RULE_NAME } from "../../ruleNames";

export default class AnonymousProcedureNode extends ProcedureNode {
  getType() {
    let type;

    const tokenType = TYPE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      type = content;  ///
    }, tokenType);

    return type;
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
