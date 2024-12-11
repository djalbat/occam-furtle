"use strict";

import { Query, Expression } from "occam-query";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const nodeQueryNodeQuery = nodeQuery("/assignment/nodeQuery"),
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

  static name = "NodeQuery";

  static fromAssignmentNode(assigmentNode, context) {
    let nodeQuery = null;

    const nodeQueryNode = nodeQueryNodeQuery(assigmentNode);

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
