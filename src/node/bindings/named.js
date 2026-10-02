"use strict";

import BindingsNode from "../../node/bindings";

import { NAMED_BINDING_RULE_NAME } from "../../ruleNames";

export default class NamedBindingsNode extends BindingsNode {
  getNamedBindingNodes() {
    const ruleName = NAMED_BINDING_RULE_NAME,
          namedBindingNodes = this.getNodesByRuleName(ruleName);

    return namedBindingNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return BindingsNode.fromRuleNameChildNodesPrecedenceAndOpacity(NamedBindingsNode, ruleName, childNodes, precedence, opacity); }
}
