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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParamterNode, ruleName, childNodes, opacity, precedence); }
}
