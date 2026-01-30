"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { PARAMETER_RULE_NAME } from "../ruleNames";

export default class ParamtersNode extends NonTerminalNode {
  getParameterNodes() {
    const ruleName = PARAMETER_RULE_NAME,
          parameterNodes = this.getNodesByRuleName(ruleName);

    return parameterNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParamtersNode, ruleName, childNodes, opacity, precedence); }
}
