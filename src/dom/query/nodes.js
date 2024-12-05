"use strict";

import { Query, Expression } from "occam-query";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const nodesQueryNodeQuery = nodeQuery("/assignment/nodesQuery"),
      expressionNodeQuery = nodeQuery("/nodesQuery/expression");

export default domAssigned(class NodesQuery {
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

  static name = "NodesQuery";

  static fromAssignmentNode(assigmentNode, context) {
    let nodesQuery = null;

    const nodesQueryNode = nodesQueryNodeQuery(assigmentNode);

    if (nodesQueryNode !== null) {
      const { Variable } = dom,
            expressionNode = expressionNodeQuery(nodesQueryNode),
            expression = Expression.fromExpressionNode(expressionNode),
            variable = Variable.fromNodesQueryNode(nodesQueryNode, context),
            query = Query.fromExpression(expression);

      nodesQuery = new NodesQuery(variable, query);
    }

    return nodesQuery;
  }
});
