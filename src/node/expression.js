"use strict";

import NonTerminalNode from "../nonTerminalNode";

import { TERM_RULE_NAME,
         SOME_RULE_NAME,
         EVERY_RULE_NAME,
         REDUCE_RULE_NAME,
         TERNARY_RULE_NAME,
         LENGTH_OF_RULE_NAME,
         TO_INTEGER_RULE_NAME,
         NODE_QUERY_RULE_NAME,
         TRY_INTEGER_RULE_NAME,
         NODES_QUERY_RULE_NAME,
         RETURN_BLOCK_RULE_NAME,
         PROCEDURE_CALL_RULE_NAME } from "../ruleNames";

export default class ExpressionNode extends NonTerminalNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  getSomeNode() {
    const ruleName = SOME_RULE_NAME,
          someNode = this.getNodeByRuleName(ruleName);

    return someNode;
  }

  getEveryNode() {
    const ruleName = EVERY_RULE_NAME,
          everyNode = this.getNodeByRuleName(ruleName);

    return everyNode;
  }

  getReduceNode() {
    const ruleName = REDUCE_RULE_NAME,
          reduceNode = this.getNodeByRuleName(ruleName);

    return reduceNode;
  }

  getTernaryNode() {
    const ruleName = TERNARY_RULE_NAME,
          ternaryNode = this.getNodeByRuleName(ruleName);

    return ternaryNode;
  }

  getLengthOfNode() {
    const ruleName = LENGTH_OF_RULE_NAME,
          lengthOfNode = this.getNodeByRuleName(ruleName);

    return lengthOfNode;
  }

  getNodeQueryNode() {
    const ruleName = NODE_QUERY_RULE_NAME,
          nodeQueryNode = this.getNodeByRuleName(ruleName);

    return nodeQueryNode;
  }

  getToIntegerNode() {
    const ruleName = TO_INTEGER_RULE_NAME,
      toIntegerNode = this.getNodeByRuleName(ruleName);

    return toIntegerNode;
  }

  getNodesQueryNode() {
    const ruleName = NODES_QUERY_RULE_NAME,
          nodeSQueryNode = this.getNodeByRuleName(ruleName);

    return nodeSQueryNode;
  }

  getTryIntegerNode() {
    const ruleName = TRY_INTEGER_RULE_NAME,
          tryIntegerNode = this.getNodeByRuleName(ruleName);

    return tryIntegerNode;
  }

  getReturnBlockNode() {
    const ruleName = RETURN_BLOCK_RULE_NAME,
          returnBlockNode = this.getNodeByRuleName(ruleName);

    return returnBlockNode;
  }

  getProcedureCallNode() {
    const ruleName = PROCEDURE_CALL_RULE_NAME,
          procedureCallNode = this.getNodeByRuleName(ruleName);

    return procedureCallNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ExpressionNode, ruleName, childNodes, opacity, precedence); }
}
