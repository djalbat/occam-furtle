"use strict";

import { NonTerminalNode } from "occam-languages";

import { BINDING_RULE_NAME } from "../ruleNames";

export default class BindingsNode extends NonTerminalNode {
  getBindingNodes() {
    const ruleName = BINDING_RULE_NAME,
          bindingNodes = this.getNodesByRuleName(ruleName);

    return bindingNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) {
    if (opacity === undefined) {
      opacity = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName; ///

      ruleName = Class; ///

      Class = BindingsNode;
    }

    const bindingsNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity);

    return bindingsNode;
  }
}
