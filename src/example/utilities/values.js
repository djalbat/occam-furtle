"use strict";

import { Query } from "occam-query";
import { Values } from "../../index"; ///
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

const freeTermNodeQuery = Query.fromExpressionString("//term[1]"),
      boundTermNodeQuery = Query.fromExpressionString("//term[0]");

export function valuesFromFileContext(fileContext, free = true) {
  const context = fileContext,  ///
        nodes = nodesFromFileContext(fileContext, free),
        values = Values.fromNodes(nodes, context);

  return values;
}

function nodesFromFileContext(fileContext, free) {
  const termNodeQuery = free ?
                          freeTermNodeQuery :
                            boundTermNodeQuery,
        node = fileContext.getNode(),
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
