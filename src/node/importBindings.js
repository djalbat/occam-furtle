"use strict";

import { NonTerminalNode } from "occam-languages";

import { IMPORT_BINDING_RULE_NAME } from "../ruleNames";

export default class ImportBindingsNode extends NonTerminalNode {
  getImportBindingNodes() {
    const ruleName = IMPORT_BINDING_RULE_NAME,
          importBindingNodes = this.getNodesByRuleName(ruleName);

    return importBindingNodes;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ImportBindingsNode, ruleName, childNodes, precedence, opacity); }
}
