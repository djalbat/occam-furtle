"use strict";

import { Query } from "occam-query";
import { Values } from "../../index"; ///
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

const termNodeQuery = Query.fromExpressionString("//term[1]");

export function valuesFromFileContext(fileContext) {
  const context = fileContext,  ///
        nodes = nodesFromFileContext(fileContext),
        values = Values.fromNodes(nodes, context);

  return values;
}

function nodesFromFileContext(fileContext) {
  const node = fileContext.getNode(),
        termNodes = termNodeQuery.execute(node),
        firstTermNode = first(termNodes),
        termNode = firstTermNode, ///
        statementNode = node, ///
        nodes = [
          termNode,
          statementNode
        ];

  return nodes;
}
