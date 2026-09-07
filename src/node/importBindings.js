"use strict";

import { NonTerminalNode } from "occam-languages";

import { IMPORT_BINDING_RULE_NAME } from "../ruleNames";

export default class ImportBindingsNode extends NonTerminalNode {
  getImportBindingNodes() {
    const ruleName = IMPORT_BINDING_RULE_NAME,
          importBindingNodes = this.getNodesByRuleName(ruleName);

    return importBindingNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ImportBindingsNode, ruleName, childNodes, opacity, precedence); }
}
