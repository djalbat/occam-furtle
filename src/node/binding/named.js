"use strict";

import BindingNode from "../../node/binding";

import { NAME_TOKEN_TYPE } from "../../tokenTypes";

export default class NamedBindingNode extends BindingNode {
  getAlias() {
    let alias = null;

    const tokenType = NAME_TOKEN_TYPE;

    this.someTerminalNode((terminalNode, index) => {
      if (index === 1) {
        const content = terminalNode.getContent();

        alias = content; //

        return true;
      }
    }, tokenType);

    return alias;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return BindingNode.fromRuleNameChildNodesPrecedenceAndOpacity(NamedBindingNode, ruleName, childNodes, precedence, opacity); }
}
