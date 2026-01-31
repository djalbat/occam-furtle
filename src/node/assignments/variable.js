"use strict";

import AssignmentsNode from "../../node/assignment";

import { TYPE_TOKEN_TYPE } from "../../tokenTypes";
import { VARIABLE_ASSIGNMENT_RULE_NAME } from "../../ruleNames";

export default class VariableAssignmentsNode extends AssignmentsNode {
  getType() {
    let type;

    const tokenType = TYPE_TOKEN_TYPE;

    this.someTerminalNode((terminalNode) => {
      const content = terminalNode.getContent();

      type = content;  ///
    }, tokenType);

    return type;
  }

  getVariableAssignmentNodes() {
    const ruleName = VARIABLE_ASSIGNMENT_RULE_NAME,
          variableAssingnmentNodss = this.getNodesByRuleName(ruleName);

    return variableAssingnmentNodss;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return AssignmentsNode.fromRuleNameChildNodesOpacityAndPrecedence(VariableAssignmentsNode, ruleName, childNodes, opacity, precedence); }
}
