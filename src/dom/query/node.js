"use strict";

import { Query, Expression } from "occam-query";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const nodeQueryNodeQuery = nodeQuery("/assignment/nodeQuery"),
      expressionNodeQuery = nodeQuery("/nodesQuery/expression");

export default domAssigned(class NodeQuery {
  getString(variable, query) {
    this.variable = variable;
    this.query = query;
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
            expressionNode = expressionNodeQuery(nodeQueryNode),
            expression = Expression.fromExpressionNode(expressionNode),
            variable = Variable.fromNodeQueryNode(nodeQueryNode, context),
            query = Query.fromExpression(expression);

      nodeQuery = new NodeQuery(variable, query);
    }

    return nodeQuery;
  }
});
