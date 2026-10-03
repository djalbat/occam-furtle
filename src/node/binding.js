"use strict";

import { NonTerminalNode } from "occam-languages";

import { TYPE_RULE_NAME } from "../ruleNames";
import { NAME_TOKEN_TYPE } from "../tokenTypes";

export default class BindingNode extends NonTerminalNode {
  isElided() {
    let elided = false;

    const tokenType = null

    this.someTerminalNode((terminalNode) => {
      const terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

      if (terminalNodeEpsilonNode) {
        elided = true;
      }

      return true;
    }, tokenType);

    return elided;
  }

  getName() {
    let name = null;

    const tokenType = NAME_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      name = content; //

      return true;
    }, tokenType);

    return name;
  }

  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity) {
    if (opacity === undefined) {
      opacity = precedence; ///

      precedence = childNodes; ///

      childNodes = ruleName; ///

      ruleName = Class; ///

      Class = BindingNode;
    }

    const bindingNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(Class, ruleName, childNodes, precedence, opacity);

    return bindingNode;
  }
}
