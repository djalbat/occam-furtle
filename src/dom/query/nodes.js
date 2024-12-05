"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const nodesQueryNodeQuery = nodeQuery("/assignment/nodesQuery");

export default domAssigned(class NodesQuery {
  getString(variable, expression) {
    this.variable = variable;
    this.expression = expression;
  }

  getVariable() {
    return this.variable;
  }

  getExpression() {
    return this.expression;
  }

  static name = "NodesQuery";

  static fromAssignmentNode(assigmentNode, context) {
    let nodesQuery = null;

    const nodesQueryNode = nodesQueryNodeQuery(assigmentNode);

    if (nodesQueryNode !== null) {
      const { Variable, Expression } = dom,
            variable = Variable.fromNodesQueryNode(nodesQueryNode, context),
            expression = Expression.fromNodesQueryNode(nodesQueryNode, context);

      nodesQuery = new NodesQuery(variable, expression);
    }

    return nodesQuery;
  }
});
