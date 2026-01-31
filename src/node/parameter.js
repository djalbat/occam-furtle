"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { TYPE_TOKEN_TYPE, NAME_TOKEN_TYPE } from "../tokenTypes";

export default class ParamterNode extends NonTerminalNode {
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

  getType() {
    let type = null;

    const tokenType = TYPE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      type = content; //

      return true;
    }, tokenType);

    return type;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = ParamterNode;
    }

    const parameterNode = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return parameterNode;
  }
}
