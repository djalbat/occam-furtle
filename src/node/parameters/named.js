"use strict";

import ParamtersNode from "../../node/parameters";

import { NAMED_PARAMETER_RULE_NAME } from "../../ruleNames";

export default class NamedParamtersNode extends ParamtersNode {
  getNamedParameterNodes() {
    const ruleName = NAMED_PARAMETER_RULE_NAME,
          namedParamterNodes = this.getNodesByRuleName(ruleName);

    return namedParamterNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return ParamtersNode.fromRuleNameChildNodesOpacityAndPrecedence(NamedParamtersNode, ruleName, childNodes, opacity, precedence); }
}
