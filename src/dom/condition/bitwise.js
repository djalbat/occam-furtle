"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";
import { DISJUNCTION } from "../../constants";

const terminalNodeQuery = nodeQuery("/bitwiseCondition/@*"),
      leftConditionNodeQuery = nodeQuery("/bitwiseCondition/condition[0]"),
      rightConditionNodeQuery = nodeQuery("/bitwiseCondition/condition[1]"),
      bitwiseConditionNodeQuery = nodeQuery("/condition/bitwiseCondition");

export default domAssigned(class BitwiseCondition {
  constructor(string, disjoint, leftCondition, rightCondition) {
    this.string = string;
    this.disjoint = disjoint;
    this.leftCondition = leftCondition;
    this.rightCondition = rightCondition;
  }

  getString() {
    debugger
  }

  isDisjoint() {
    return this.disjoint;
  }

  getLeftCondition() {
    return this.leftCondition;
  }

  getRightCondition() {
    return this.rightCondition;
  }

  evaluate(context) {
    let value;

    const bitwiseConditionString = this.string; ///

    context.trace(`Evaluating the '${bitwiseConditionString}' bitwise condition...`);

    const { Value } = dom,
          leftValue = this.leftCondition.evaluate(context),
          rightValue = this.rightCondition.evaluate(context),
          leftValueBoolean = leftValue.getBoolean(),
          rightValueBoolean = rightValue.getBoolean(),
          boolean = this.disjoint ?
                      (leftValueBoolean || rightValueBoolean) :
                        (leftValueBoolean && rightValueBoolean);

    value = Value.fromBoolean(boolean, context);  ///

    context.debug(`...evaluated the '${bitwiseConditionString}' bitwise condition.`);

    return value;
  }

  static name = "BitwiseCondition";

  static fromConditionNode(conditionNode, context) {
    let bitwiseCondition = null;

    const bitwiseConditionNode = bitwiseConditionNodeQuery(conditionNode);

    if (bitwiseConditionNode !== null) {
      const { Condition } = dom,
            node = bitwiseConditionNode,  //
            string = context.nodeAsString(node),
            leftConditionNode = leftConditionNodeQuery(bitwiseConditionNode),
            rightConditionNode = rightConditionNodeQuery(bitwiseConditionNode),
            disjoint = disjointFromBitwiseConditionNode(bitwiseConditionNode, context),
            leftCondition = Condition.fromConditionNode(leftConditionNode, context),
            rightCondition = Condition.fromConditionNode(rightConditionNode, context);

      bitwiseCondition = new BitwiseCondition(string, disjoint, leftCondition, rightCondition);
    }

    return bitwiseCondition;
  }
});

function disjointFromBitwiseConditionNode(bitwiseConditionNode, context) {
  const terminalNode = terminalNodeQuery(bitwiseConditionNode),
        terminalNodeContent = terminalNode.getContent(),
        disjoint = (terminalNodeContent === DISJUNCTION);

  return disjoint;
}
