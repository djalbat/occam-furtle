"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";

const variableNodeQuery = nodeQuery("/reduce/variable"),
      parametersNodeQuery = nodeQuery("/reduce/anonymousProcedure/parameters"),
      valueReduceNodeQuery = nodeQuery("/value/reduce"),
      initialValueNodeQuery = nodeQuery("/reduce/value"); ///

export default domAssigned(class Reduce {
  constructor(string, variable, initialValue, anonymousProcedure) {
    this.string = string;
    this.variable = variable;
    this.initialValue = initialValue;
    this.anonymousProcedure = anonymousProcedure;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getInitialValue() {
    return this.initialValue;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate(context) {
    let value;

    const reduceString = this.getString();

    context.trace(`Evaluating the '${reduceString}' reduce...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType();

    if (valueType !== NODES_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes(),
          initialValue = this.initialValue.evaluate(context);

    value = nodes.reduce((currentValue, node) => {
      let value;

      const { Value, Values } = dom;

      value = currentValue; ///

      const values = Values.fromValue(value, context);

      value = Value.fromNode(node, context);

      values.addValue(value);

      value = this.anonymousProcedure.call(values, context);

      return value;
    }, initialValue);

    context.trace(`...evaluated the '${reduceString}' reduce.`);

    return value;
  }

  static name = "Reduce";

  static fromValueNode(valueNode, context) {
    let reduce = null;

    const valueReduceNode = valueReduceNodeQuery(valueNode);

    if (valueReduceNode !== null) {
      const { Value, Variable, AnonymousProcedure } = dom,
            reduceNode = valueReduceNode, ///
            string = stringFromReduceNode(reduceNode, context),
            value = Value.fromReduceNode(reduceNode, context),
            variable = Variable.fromReduceNode(reduceNode, context),
            initialValue = value, ///
            anonymousProcedure = AnonymousProcedure.fromReduceNode(reduceNode, context);

      reduce = new Reduce(string, variable, initialValue, anonymousProcedure);
    }

    return reduce;
  }
});

function stringFromReduceNode(reduceNode, context) {
  const variableNode = variableNodeQuery(reduceNode),
        parametersNode = parametersNodeQuery(reduceNode),
        initialValueNode = initialValueNodeQuery(reduceNode),
        variableString = context.nodeAsString(variableNode),
        parametersString = context.nodeAsString(parametersNode),
        initialValueString = context.nodeAsString(initialValueNode),
        string = `Reduce(${variableString}, (${parametersString}) { ... }, ${initialValueString})`;

  return string;
}