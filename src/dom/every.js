"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { NODES_TYPE, BOOLEAN_TYPE } from "../types";

const variableNodeQuery = nodeQuery("/every/variable"),
      valueEveryNodeQuery = nodeQuery("/value/every"),
      parametersNodeQuery = nodeQuery("/every/anonymousProcedure/parameters");

export default domAssigned(class Every {
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

    const everyString = this.getString();

    context.trace(`Evaluating the '${everyString}' every...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType();

    if (valueType !== NODES_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes(),
          boolean = nodes.every((node) => {
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

    context.trace(`...evaluated the '${everyString}' every.`);

    return value;
  }

  static name = "Every";

  static fromValueNode(valueNode, context) {
    let every = null;

    const valueEveryNode = valueEveryNodeQuery(valueNode);

    if (valueEveryNode !== null) {
      const { Variable, AnonymousProcedure } = dom,
            everyNode = valueEveryNode, ///
            string = stringFromEveryNode(everyNode, context),
            variable = Variable.fromEveryNode(everyNode, context),
            anonymousProcedure = AnonymousProcedure.fromEveryNode(everyNode, context);

      every = new Every(string, variable, anonymousProcedure);
    }

    return every;
  }
});

function stringFromEveryNode(everyNode, context) {
  const variableNode = variableNodeQuery(everyNode),
        parametersNode = parametersNodeQuery(everyNode),
        variableString = context.nodeAsString(variableNode),
        parametersString = context.nodeAsString(parametersNode),
        string = `Every(${variableString}, (${parametersString}) { ... })`;

  return string;
}