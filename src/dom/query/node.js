"use strict";

import { arrayUtilities } from "necessary";
import { Query, Expression } from "occam-query";

import dom from "../../dom";
import Exception from "../../exception";

import { NODE_TYPE } from "../../types";
import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const { first } = arrayUtilities;

const nodeQueryNodeQuery = nodeQuery("/value/nodeQuery"),
      expressionNodeQuery = nodeQuery("/nodeQuery/expression");

export default domAssigned(class NodeQuery {
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
    let value;

    const nodeQueryString = this.string;  ///

    context.trace(`Evaluating the '${nodeQueryString}' node query...`);

    value = this.variable.evaluate(context);

    const valueType = value.getType();

    if (valueType !== NODE_TYPE) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's '${valueType}' type should be '${NODE_TYPE}'.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const valueNode = value.getNode();

    if (valueNode === null) {
      const valueString = value.asString(context),
            message = `The ${valueString} value's node is null.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    let node;

    node = valueNode; ///

    const nodes = this.query.execute(node),
          nodesLength = nodes.length;

    if (nodesLength !== 1) {
      const message = `The length of the returned nodes is ${nodesLength} when it should be 1.`,
            exception = Exception.fromMessage(message);

      throw exception;
    }

    const firstNode = first(nodes);

    node = firstNode; ///

    const { Value } = dom;

    value = Value.fromNode(node, context);

    context.debug(`...evaluated the '${nodeQueryString}' node query.`);

    return value;
  }

  static name = "NodeQuery";

  static fromValueNode(valueNode, context) {
    let nodeQuery = null;

    const nodeQueryNode = nodeQueryNodeQuery(valueNode);

    if (nodeQueryNode !== null) {
      const { Variable } = dom,
            node = nodeQueryNode, ///
            string = context.nodeAsString(node),
            expressionNode = expressionNodeQuery(nodeQueryNode),
            expression = Expression.fromExpressionNode(expressionNode),
            variable = Variable.fromNodeQueryNode(nodeQueryNode, context),
            query = Query.fromExpression(expression);

      nodeQuery = new NodeQuery(string, variable, query);
    }

    return nodeQuery;
  }
});
