"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";

const valueSomeNodeQuery = nodeQuery("/value/some");

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
    let value;

    const someString = this.getString();

    context.trace(`Evaluating the '${someString}' some...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType();

    if (valueType !== NODES_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes(),
          boolean = nodes.some((node) => {
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

    const { Value } = dom;

    value = Value.fromBoolean(boolean, context);

    context.trace(`...evaluated the '${someString}' some.`);

    return value;
  }

  static name = "Some";

  static fromValueNode(valueNode, context) {
    let some = null;

    const valueSomeNode = valueSomeNodeQuery(valueNode);

    if (valueSomeNode !== null) {
      const someNode = valueSomeNode; ///

      some = someFromSomeNode(someNode, context);
    }

    return some;
  }
});

function someFromSomeNode(someNode, context) {
  const { Some, Variable, AnonymousProcedure } = dom,
        anonymousProcedure = AnonymousProcedure.fromSomeNode(someNode, context),
        variable = Variable.fromSomeNode(someNode, context),
        string = stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context),
        some = new Some(string, variable, anonymousProcedure);

  return some;
}

function stringFromVariableAndAnonymousProcedure(variable, anonymousProcedure, context) {
  const variableString = variable.getString(),
        anonymousProcedureString = anonymousProcedure.getString(),
        string = `Some(${variableString}, ${anonymousProcedureString}) `;

  return string;
}
