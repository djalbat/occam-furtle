"use strict";

import { arrayUtilities } from "necessary";

import elements from "../../elements";
import Exception from "../../exception";

import { define } from "../../elements";
import { NODE_TYPE } from "../../types";

const { first } = arrayUtilities;

export default define(class NodeQuery {
  constructor(string, variable, query) {
    this.string = string;
    this.variable = variable;
    this.query = query;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  getQuery() {
    return this.query;
  }

  evaluate(context) {
    let expression;

    const nodeQueryString = this.string;  ///

    context.trace(`Evaluating the '${nodeQueryString}' node query...`);

    if (this.query === null) {
      const message = `Cannot evaluate the '${nodeQueryString}' node query because its expression is malformed.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    expression = this.variable.evaluate(context);

    const expressionType = expression.getType();

    if (expressionType !== NODE_TYPE) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's '${expressionType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const expressionNode = expression.getNode();

    if (expressionNode === null) {
      const expressionString = expression.asString(context),
            message = `The ${expressionString} expression's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    node = expressionNode; ///

    const nodes = this.query.execute(node),
          nodesLength = nodes.length;

    if (nodesLength !== 1) {
      const message = `The length of the returned nodes is ${nodesLength} when it should be 1.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const firstNode = first(nodes);

    node = firstNode; ///

    const { Expression } = elements;

    expression = Expression.fromNode(node, context);

    context.debug(`...evaluated the '${nodeQueryString}' node query.`);

    return expression;
  }

  static name = "NodeQuery";
});
