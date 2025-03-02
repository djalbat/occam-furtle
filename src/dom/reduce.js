"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { NODES_TYPE } from "../types";
import { domAssigned } from "../dom";

const valueReduceNodeQuery = nodeQuery("/value/reduce"); ///

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
      const reduceNode = valueReduceNode; ///

      reduce = reduceFromReduceNode(reduceNode, context);
    }

    return reduce;
  }
});

function reduceFromReduceNode(reduceNode, context) {
  const { Value, Reduce, Variable, AnonymousProcedure } = dom,
        value = Value.fromReduceNode(reduceNode, context),
        variable = Variable.fromReduceNode(reduceNode, context),
        initialValue = value, ///
        anonymousProcedure = AnonymousProcedure.fromReduceNode(reduceNode, context),
        string = stringFromVariableInitialValueAndAnonymousProcedure(variable, initialValue, anonymousProcedure),
        reduce = new Reduce(string, variable, initialValue, anonymousProcedure);

  return reduce;
}

function stringFromVariableInitialValueAndAnonymousProcedure(variable, initialValue, anonymousProcedure) {
  const variableString = variable.getString(),
        initialValueString = initialValue.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        string = `Reduce(${variableString}, ${anonymousProcedureString}, ${initialValueString})`;

  return string;
}
