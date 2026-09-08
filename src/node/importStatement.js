"use strict";

import { NonTerminalNode } from "occam-languages";

import { EMPTY_STRING } from "../constants";
import { IMPORT_BINDINGS_RULE_NAME } from "../ruleNames";
import { STRING_LITERAL_TOKEN_TYPE } from "../tokenTypes";

export default class ImportStatementNode extends NonTerminalNode {
  getReleaseName() {
    let releaseName;

    const tokenType = STRING_LITERAL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      releaseName = trim(content);  ///

      return true;
    }, tokenType);

    return releaseName;
  }

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

function trim(content) {
  return content.replace(/(^"|"$)/g, EMPTY_STRING);
}