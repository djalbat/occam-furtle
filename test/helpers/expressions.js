"use strict";

const { Query } = require("occam-query"),
      { arrayUtilities } = require("necessary"),
      { elementUtilities } = require("../../lib/index");  ///

const { first } = arrayUtilities,
      { expressionsFromNodes } = elementUtilities;

const freeTermNodeQuery = Query.fromExpressionString("//term[1]"),
      boundTermNodeQuery = Query.fromExpressionString("//term[0]");

function expressionsFromFileContext(fileContext, free = true) {
  const context = fileContext,  ///
        nodes = nodesFromFileContext(fileContext, free),
        expressions = expressionsFromNodes(nodes, context);

  return expressions;
}

module.exports = {
  expressionsFromFileContext
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
