"use strict";

import { nodeQuery } from "../../utilities/query";
import dom, { domAssigned } from "../../dom";

const nodeQueryNodeQuery = nodeQuery("/assignment/nodeQuery");

export default domAssigned(class NodeQuery {
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

  static name = "NodeQuery";

  static fromAssignmentNode(assigmentNode, context) {
    let nodeQuery = null;

    const nodeQueryNode = nodeQueryNodeQuery(assigmentNode);

    if (nodeQueryNode !== null) {
      const { Variable, Expression } = dom,
            variable = Variable.fromNodeQueryNode(nodeQueryNode, context),
            expression = Expression.fromNodeQueryNode(nodeQueryNode, context);

      nodeQuery = new NodeQuery(variable, expression);
    }

    return nodeQuery;
  }
});
