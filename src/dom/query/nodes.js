"use strict";

import { Query, Expression } from "occam-query";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const nodesQueryNodeQuery = nodeQuery("/assignment/nodesQuery"),
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

  static name = "NodesQuery";

  static fromAssignmentNode(assigmentNode, context) {
    let nodesQuery = null;

    const nodesQueryNode = nodesQueryNodeQuery(assigmentNode);

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
