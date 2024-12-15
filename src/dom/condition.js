"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";

const conditionNodeQuery = nodeQuery("/conditionalBlocks/condition");

export default domAssigned(class Condition {
  constructor(string, value, comparison, bitwiseCondition, bracketedCondition) {
    this.string = string;
    this.value = value;
    this.comparison = comparison;
    this.bitwiseCondition = bitwiseCondition;
    this.bracketedCondition = bracketedCondition;
  }

  getString() {
    return this.string;
  }

  getValue() {
    return this.value;
  }

  getComparison() {
    return this.comparison;
  }

  getBitwiseCondition() {
    return this.bitwiseCondition;
  }

  getBracketedCondition() {
    return this.bracketedCondition;
  }

  resolve(context) {
    let value;

    const conditionString = this.string;  ///

    context.trace(`Resolving the '${conditionString}' condition...`);

    if (this.value !== null) {
      value = this.value.resolve(context);

      const valueType = value.getType();

      if (valueType !== BOOLEAN_TYPE) {
        const valueString = value.asString(context),
              message = `The '${valueType}' type of the '${valueString}' value should be '${BOOLEAN_TYPE}'`,
              exception = Exception.fromMessage(message);

        throw exception;
      }
    }

    if (this.comparison !== null) {
      value = this.comparison.resolve(context);
    }

    if (this.bitwiseCondition !== null) {
      value = this.bitwiseCondition.resolve(context);
    }

    if (this.bracketedCondition !== null) {
      value = this.bracketedCondition.resolve(context);
    }

    context.debug(`...resolved the '${conditionString}' condition.`);

    return value;
  }

  static name = "Condition";

  static fromConditionNode(conditionNode, context) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          node = conditionNode, ///
          string = context.nodeAsString(node),
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }

  static fromConditionalBlocksNode(conditionalBlocksNode, context) {
    const { Value, Comparison, BitwiseCondition, BracketedCondition } = dom,
          conditionNode = conditionNodeQuery(conditionalBlocksNode),
          node = conditionNode, ///
          string = context.nodeAsString(node),
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);

    return condition;
  }
});
