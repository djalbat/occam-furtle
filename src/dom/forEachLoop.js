"use strict";

import dom from "../dom";
import Exception from "../exception";

import { nodeQuery } from "../utilities/query";
import { NODES_TYPE } from "../types";
import { domAssigned } from "../dom";

const variableNodeQuery = nodeQuery("/forEachLoop/variable"),
      parametersNodeQuery = nodeQuery("/forEachLoop/anonymousProcedure/parameters"),
      forEachLoopNodeQuery = nodeQuery("/step/forEachLoop");

export default domAssigned(class ForEachLoop {
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

  resolve(context) {
    const forEachLoopString = this.getString();

    context.trace(`Resolving the '${forEachLoopString}' for-each loop...`);

    const value = this.variable.resolve(context),
          valueType = value.getType();

    if (valueType !== NODES_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODES_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const nodes = value.getNodes();

    nodes.forEach((node) => {
      const { Value, Values } = dom,
            value = Value.fromNode(node, context),
            values = Values.fromValue(value, context);

      this.anonymousProcedure.call(values, context);
    });

    context.trace(`...resolved the '${forEachLoopString}' for-each loop.`);
  }

  static name = "ForEachLoop";

  static fromStepNode(stepNode, context) {
    let forEachLoop = null;

    const forEachLoopNode = forEachLoopNodeQuery(stepNode);

    if (forEachLoopNode !== null) {
      const { Variable, AnonymousProcedure } = dom,
            string = stringFromForEachLoopNode(forEachLoopNode, context),
            variable = Variable.fromForEachLoopNode(forEachLoopNode, context),
            anonymousProcedure = AnonymousProcedure.fromForEachLoopNode(forEachLoopNode, context);

      forEachLoop = new ForEachLoop(string, variable, anonymousProcedure);
    }

    return forEachLoop;
  }
});

function stringFromForEachLoopNode(forEachLoopNode, context) {
  const variableNode = variableNodeQuery(forEachLoopNode),
        parametersNode = parametersNodeQuery(forEachLoopNode),
        variableString = context.nodeAsString(variableNode),
        parametersString = context.nodeAsString(parametersNode),
        string = `ForEach(${variableString}, (${parametersString}) { ... })`;

  return string;
}