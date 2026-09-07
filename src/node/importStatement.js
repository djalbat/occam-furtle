"use strict";

import { NonTerminalNode } from "occam-languages";

import { IMPORT_BINDINGS_RULE_NAME } from "../ruleNames";

export default class ImportStatementNode extends NonTerminalNode {
  getImportBindingNodes() {
    const importBindingsNode = this.getImportBindingsNode(),
          importBindingNodes = importBindingsNode.getImportBindingNodes();

    return importBindingNodes;
  }

  getImportBindingsNode() {
    const ruleName = IMPORT_BINDINGS_RULE_NAME,
          importBindingsNode = this.getNodeByRuleName(ruleName);

    return importBindingsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ImportStatementNode, ruleName, childNodes, opacity, precedence); }
}
