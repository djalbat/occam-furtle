"use strict";

import ProcedureNode from "../../node/procedure";

import { TYPE_TOKEN_TYPE } from "../../tokenTypes";
import { PARAMETERS_RULE_NAME, RETURN_BLOCK_RULE_NAME } from "../../ruleNames";

export default class AnonymousProcedureNode extends ProcedureNode {
  getType() {
    let type = null;

    this.someChildNode((childNode, index) => {
      const terminalNode = childNode, ///
            terminalNodeType = terminalNode.getType();

      if (terminalNodeType === TYPE_TOKEN_TYPE) {
        const content = terminalNode.getContent();

        type = content;  ///
      }

      if (index === 0) {
        return true;
      }
    });

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
