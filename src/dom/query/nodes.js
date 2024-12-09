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
    debugger
  }

  getVariable() {
    return this.variable;
  }

  getQuery() {
    return this.query;
  }

  static name = "NodesQuery";

  static fromAssignmentNode(assigmentNode) {
    let nodesQuery = null;

    const nodesQueryNode = nodesQueryNodeQuery(assigmentNode);

    if (nodesQueryNode !== null) {
      const { Variable } = dom,
            expressionNode = expressionNodeQuery(nodesQueryNode),
            expression = Expression.fromExpressionNode(expressionNode),
            variable = Variable.fromNodesQueryNode(nodesQueryNode),
            query = Query.fromExpression(expression),
            string = null;

      nodesQuery = new NodesQuery(string, variable, query);
    }

    return nodesQuery;
  }
});
