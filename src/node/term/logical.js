"use strict";

import { arrayUtilities } from "necessary";

import TermNode from "../../node/term";

import { TERM_RULE_NAME } from "../../ruleNames";
import { SPECIAL_TOKEN_TYPE } from "../../tokenTypes";
import { CONJUNCTION_OPERATOR, DISJUNCTION_OPERATOR } from "../../constants";

const { first, last } = arrayUtilities;

export default class LogicalTermNode extends TermNode {
  getOperator() {
    let operator = null;

    const tokenType = SPECIAL_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      operator = content; ///

      return true;
    }, tokenType);

    return operator;
  }

  isConjection() {
    const operator = this.getOperator(),
          conjection = (operator === CONJUNCTION_OPERATOR);

    return conjection;
  }

  isDisjunction() {
    const operator = this.getOperator(),
          disjunction = (operator === DISJUNCTION_OPERATOR);

    return disjunction;
  }

  getTermNodes() {
    const ruleName = TERM_RULE_NAME,
          termNodes = this.getNodesByRuleName(ruleName);

    return termNodes;
  }

  getLeftTermNode() {
    const firstExpresionNode = this.getFirstTermNode(),
          leftTermNode = firstExpresionNode;  ///

    return leftTermNode;
  }

  getRightTermNode() {
    const lastTermNode = this.getLastTermNode(),
          rightTermNode = lastTermNode; ///

    return rightTermNode;
  }

  getLastTermNode() {
    const termNodes = this.getTermNodes(),
          lastTermNode = last(termNodes);

    return lastTermNode;
  }

  getFirstTermNode() {
    const termNodes = this.getTermNodes(),
          firstTermNode = first(termNodes);

    return firstTermNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return TermNode.fromRuleNameChildNodesOpacityAndPrecedence(LogicalTermNode, ruleName, childNodes, opacity, precedence); }
}
