"use strict";

import { nodeQuery } from "../../utilities/query";
import { domAssigned } from "../../dom";

const nodesQueryNodeQuery = nodeQuery("/assignment/nodesQuery");

export default domAssigned(class NodesQuery {
  getString() {
    debugger
  }

  static name = "NodesQuery";

  static fromAssignmentNode(assigmentNode, context) {
    let nodesQuery = null;

    const nodesQueryNode = nodesQueryNodeQuery(assigmentNode);

    if (nodesQueryNode !== null) {
      debugger
    }

    return nodesQuery;
  }
});
