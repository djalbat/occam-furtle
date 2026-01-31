"use strict";

import ParamterNode from "../../node/parameter";

import { NAME_TOKEN_TYPE } from "../../tokenTypes";

export default class NamedParamterNode extends ParamterNode {
  getAsName() {
    let asName = null;

    const tokenType = NAME_TOKEN_TYPE;

    this.someTerminalNode((terminalNode, index) => {
      if (index === 3) {
        const content = terminalNode.getContent();

        asName = content; //

        return true;
      }
    }, tokenType);

    return asName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return ParamterNode.fromRuleNameChildNodesOpacityAndPrecedence(NamedParamterNode, ruleName, childNodes, opacity, precedence); }
}
