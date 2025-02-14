"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { BOOLEAN_TYPE } from "../types";

const conditionNodeQuery = nodeQuery("/conditionalBlocks/condition");

export default domAssigned(class Condition {
  constructor(string, value, comparison, bitwiseCondition, negatedCondition, bracketedCondition) {
    this.string = string;
    this.value = value;
    this.comparison = comparison;
    this.bitwiseCondition = bitwiseCondition;
    this.negatedCondition = negatedCondition;
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

  getNegatedCondition() {
    return this.negatedCondition;
  }

  getBracketedCondition() {
    return this.bracketedCondition;
  }

  evaluate(context) {
    let value;

    const conditionString = this.string;  ///

    context.trace(`Evaluating the '${conditionString}' condition...`);

    if (this.value !== null) {
      value = this.value.evaluate(context);

      const valueType = value.getType();

      if (valueType !== BOOLEAN_TYPE) {
        const valueString = value.asString(context),
              message = `The '${valueType}' type of the '${valueString}' value should be '${BOOLEAN_TYPE}'`,
              exception = Exception.fromMessage(message);

        throw exception;
      }
    }

    if (this.comparison !== null) {
      value = this.comparison.evaluate(context);
    }

    if (this.bitwiseCondition !== null) {
      value = this.bitwiseCondition.evaluate(context);
    }

    if (this.negatedCondition !== null) {
      value = this.negatedCondition.evaluate(context);
    }

    if (this.bracketedCondition !== null) {
      value = this.bracketedCondition.evaluate(context);
    }

    context.debug(`...evaluated the '${conditionString}' condition.`);

    return value;
  }

  static name = "Condition";

  static fromConditionNode(conditionNode, context) {
    const { Value, Comparison, BitwiseCondition, NegatedCondition, BracketedCondition } = dom,
          node = conditionNode, ///
          string = context.nodeAsString(node),
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          negatedCondition = NegatedCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(string, value, comparison, bitwiseCondition, negatedCondition, bracketedCondition);

    return condition;
  }

  static fromConditionalBlocksNode(conditionalBlocksNode, context) {
    const { Value, Comparison, BitwiseCondition, NegatedCondition, BracketedCondition } = dom,
          conditionNode = conditionNodeQuery(conditionalBlocksNode),
          node = conditionNode, ///
          string = context.nodeAsString(node),
          value = Value.fromConditionNode(conditionNode, context),
          comparison = Comparison.fromConditionNode(conditionNode, context),
          bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context),
          negatedCondition = NegatedCondition.fromConditionNode(conditionNode, context),
          bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context),
          condition = new Condition(string, value, comparison, bitwiseCondition, negatedCondition, bracketedCondition);

    return condition;
  }
});
