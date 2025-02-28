"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";

const variableNodeQuery = nodeQuery("/some/variable"),
      valueSomeNodeQuery = nodeQuery("/value/some"),
      parametersNodeQuery = nodeQuery("/some/anonymousProcedure/parameters");

export default domAssigned(class Some {
  constructor(string, variable, anonymousProcedure) {
    this.string = string;
    this.variable = variable;
    this.anonymousProcedure = anonymousProcedure;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getAnonymousProcedure() {
    return this.anonymousProcedure;
  }

  evaluate(context) {
    const someString = this.getString();

    context.trace(`Evaluating the '${someString}' some...`);

    const value = this.variable.evaluate(context),
          valueType = value.getType();

    if (valueType !== NODES_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes();

    nodes.some((node) => {
      let value;

      const { Value, Values } = dom;

      value = Value.fromNode(node, context);

      const values = Values.fromValue(value, context);

      value = this.anonymousProcedure.call(values, context);

      const valueType = value.getType();

      if (valueType !== BOOLEAN_TYPE) {
        const valueString = value.asString(context),
              message = `The ${valueString} value's type is '${valueType}' when it should be of type '${BOOLEAN_TYPE}'.`,
              exception = Exception.fromMessage(message);

        throw exception;
      }

      const boolean = value.getBoolean();

      return boolean;
    });

    context.trace(`...evaluated the '${someString}' some.`);
  }

  static name = "Some";

  static fromValueNode(valueNode, context) {
    let some = null;

    const valueSomeNode = valueSomeNodeQuery(valueNode);

    if (valueSomeNode !== null) {
      const { Variable, AnonymousProcedure } = dom,
            someNode = valueSomeNode, ///
            string = stringFromSomeNode(someNode, context),
            variable = Variable.fromSomeNode(someNode, context),
            anonymousProcedure = AnonymousProcedure.fromSomeNode(someNode, context);

      some = new Some(string, variable, anonymousProcedure);
    }

    return some;
  }
});

function stringFromSomeNode(someNode, context) {
  const variableNode = variableNodeQuery(someNode),
        parametersNode = parametersNodeQuery(someNode),
        variableString = context.nodeAsString(variableNode),
        parametersString = context.nodeAsString(parametersNode),
        string = `Some(${variableString}, (${parametersString}) { ... })`;

  return string;
}