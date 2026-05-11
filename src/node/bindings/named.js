"use strict";

import BindingsNode from "../../node/bindings";

import { NAMED_BINDING_RULE_NAME } from "../../ruleNames";

export default class NamedBindingsNode extends BindingsNode {
  getNamedBindingNodes() {
    const ruleName = NAMED_BINDING_RULE_NAME,
          namedBindingNodes = this.getNodesByRuleName(ruleName);

    return namedBindingNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return BindingsNode.fromRuleNameChildNodesOpacityAndPrecedence(NamedBindingsNode, ruleName, childNodes, opacity, precedence); }
}
