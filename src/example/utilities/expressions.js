"use strict";

import { Query } from "occam-query";
import { Expressions } from "../../index"; ///
import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

const freeTermNodeQuery = Query.fromExpressionString("//term[1]"),
      boundTermNodeQuery = Query.fromExpressionString("//term[0]");

export function expressionsFromFileContext(fileContext, free = true) {
  const context = fileContext,  ///
        nodes = nodesFromFileContext(fileContext, free),
        expressions = Expressions.fromNodes(nodes, context);

  return expressions;
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
