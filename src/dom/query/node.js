"use strict";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const nodeQueryNodeQuery = nodeQuery("/assignment/nodeQuery");

export default domAssigned(class NodeQuery {
  getString() {
    debugger
  }

  static name = "NodeQuery";

  static fromAssignmentNode(assigmentNode, context) {
    let nodeQuery = null;

    const nodeQueryNode = nodeQueryNodeQuery(assigmentNode);

    if (nodeQueryNode !== null) {
      debugger
    }

    return nodeQuery;
  }
});
