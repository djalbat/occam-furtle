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
    debugger
  }

  getVariable() {
    return this.variable;
  }

  getQuery() {
    return this.query;
  }

  static name = "NodeQuery";

  static fromAssignmentNode(assigmentNode) {
    let nodeQuery = null;

    const nodeQueryNode = nodeQueryNodeQuery(assigmentNode);

    if (nodeQueryNode !== null) {
      const { Variable } = dom,
            expressionNode = expressionNodeQuery(nodeQueryNode),
            expression = Expression.fromExpressionNode(expressionNode),
            variable = Variable.fromNodeQueryNode(nodeQueryNode),
            query = Query.fromExpression(expression),
            string = null;

      nodeQuery = new NodeQuery(string, variable, query);
    }

    return nodeQuery;
  }
});
