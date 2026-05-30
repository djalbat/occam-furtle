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

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = BindingNode;
    }

    const parametersNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return parametersNode;
  }
}
