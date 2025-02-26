"use strict";

import { Query, Expression } from "occam-query";

import dom from "../../dom";
import Exception from "../../exception";

import { nodeQuery } from "../../utilities/query";
import { NODE_TYPE } from "../../types";
import { domAssigned } from "../../dom";

const nodesQueryNodeQuery = nodeQuery("/value/nodesQuery"),
      expressionNodeQuery = nodeQuery("/nodesQuery/expression");

export default domAssigned(class NodesQuery {
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

    const nodesQueryString = this.string;  ///

    context.trace(`Evaluating the '${nodesQueryString}' nodes query...`);

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

    const nodes = this.query.execute(node);

    const { Value } = dom;

    value = Value.fromNodes(nodes, context);

    context.debug(`...evaluated the '${nodesQueryString}' nodes query.`);

    return value;
  }

  static name = "NodesQuery";

  static fromValueNode(valueNode, context) {
    let nodesQuery = null;

    const nodesQueryNode = nodesQueryNodeQuery(valueNode);

    if (nodesQueryNode !== null) {
      const { Variable } = dom,
            node = nodesQueryNode,  ///
            string = context.nodeAsString(node),
            expressionNode = expressionNodeQuery(nodesQueryNode),
            expression = Expression.fromExpressionNode(expressionNode),
            variable = Variable.fromNodesQueryNode(nodesQueryNode, context),
            query = Query.fromExpression(expression);

      nodesQuery = new NodesQuery(string, variable, query);
    }

    return nodesQuery;
  }
});
