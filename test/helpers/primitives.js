"use strict";

const { Query } = require("occam-query"),
      { arrayUtilities } = require("necessary"),
      { primitivesUtilities } = require("../../lib/index");  ///

const { first } = arrayUtilities,
      { primitivesFromNodes } = primitivesUtilities;

const freeTermNodeQuery = Query.fromExpressionString("//term[1]"),
      boundTermNodeQuery = Query.fromExpressionString("//term[0]");

function primitivesFromFileContext(fileContext, free = true) {
  const context = fileContext,  ///
        nodes = nodesFromFileContext(fileContext, free),
        primitives = primitivesFromNodes(nodes, context);

  return primitives;
}

module.exports = {
  primitivesFromFileContext
};

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
