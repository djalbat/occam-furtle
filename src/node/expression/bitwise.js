"use strict";

import ExpressionNode from "../../node/expression";

import { COMPARISON_TOKEN_TYPE } from "../../tokenTypes";
import { VARIABLE_ASSIGNMENT_RULE_NAME } from "../../ruleNames";

export default class VariableExpressionNode extends ExpressionNode {
  getType() {
    let type = null;

    this.someChildNode((childNode, index) => {
      const terminalNode = childNode, ///
            terminalNodeType = terminalNode.getType();

      if (terminalNodeType === COMPARISON_TOKEN_TYPE) {
        const content = terminalNode.getContent();

        type = content;  ///
      }

      if (index === 0) {
        return true;
      }
    });

    return type;
  }

  getVariableAssignmentNodes() {
    const ruleName = VARIABLE_ASSIGNMENT_RULE_NAME,
          variableAssingnmentNodss = this.getNodesByRuleName(ruleName);

    return variableAssingnmentNodss;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return ExpressionNode.fromRuleNameChildNodesOpacityAndPrecedence(VariableExpressionNode, ruleName, childNodes, opacity, precedence); }
}
