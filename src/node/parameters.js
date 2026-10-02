"use strict";

import { NonTerminalNode } from "occam-languages";

import { PARAMETER_RULE_NAME } from "../ruleNames";

export default class ParametersNode extends NonTerminalNode {
  getParameterNodes() {
    const ruleName = PARAMETER_RULE_NAME,
          parameterNodes = this.getNodesByRuleName(ruleName);

    return parameterNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ParametersNode, ruleName, childNodes, precedence, opacity); }
}
