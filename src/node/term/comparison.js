"use strict";

import { arrayUtilities } from "necessary";

import TermNode from "../../node/term";

import { NOT_EQUAL_TO } from "../../constants";
import { TERM_RULE_NAME } from "../../ruleNames";
import { SPECIAL_TOKEN_TYPE } from "../../tokenTypes";

const { first, second } = arrayUtilities;

export default class ComparisonTermNode extends TermNode {
  isNegated() {
    let negated = false;

    const tokenType = SPECIAL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      if (content === NOT_EQUAL_TO) {
        negated = true;
      }

      return true;
    }, tokenType);

    return negated;
  }

  getTermNodes() {
    const ruleName = TERM_RULE_NAME,
          termNodes = this.getNodesByRuleName(ruleName);

    return termNodes;
  }

  getLeftTermNode() {
    const firstTermNode = this.getFirstTermNode(),
          leftTermNode = firstTermNode; ///

    return leftTermNode;
  }

  getRightTermNode() {
    const secondTermNode = this.getSecondTermNode(),
          rightTermNode = secondTermNode;  ///

    return rightTermNode;
  }

  getFirstTermNode() {
    const termNodes = this.getTermNodes(),
          firstTermNode = first(termNodes);

    return firstTermNode;
  }

  getSecondTermNode() {
    const termNodes = this.getTermNodes(),
          secondTermNode = second(termNodes);

    return secondTermNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TermNode.fromRuleNameChildNodesOpacityAndPrecedence(ComparisonTermNode, ruleName, childNodes, opacity, precedence); }
}
