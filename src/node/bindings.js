"use strict";

import { NonTerminalNode } from "occam-languages";

import { BINDINGS_RULE_NAME } from "../ruleNames";

export default class BindingsNode extends NonTerminalNode {
  getBindingNodes() {
    const ruleName = BINDINGS_RULE_NAME,
          bindingNodes = this.getNodesByRuleName(ruleName);

    return bindingNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = BindingsNode;
    }

    const parametersNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return parametersNode;
  }
}
