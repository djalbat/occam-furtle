"use strict";

const { Query } = require("occam-query"),
      { arrayUtilities } = require("necessary"),
      { termsUtilities } = require("../../lib/index");  ///

const { first } = arrayUtilities,
      { termsFromNodes } = termsUtilities;

const freeTermNodeQuery = Query.fromExpressionString("//term[1]"),
      boundTermNodeQuery = Query.fromExpressionString("//term[0]");

function termsFromNominalFileContext(nominalFileContext, free = true) {
  const fileContext = nominalFileContext,  ///
        nodes = nodesFromFileContext(fileContext, free),
        context = fileContext,  ///
        terms = termsFromNodes(nodes, context);

  return terms;
}

module.exports = {
  termsFromNominalFileContext
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
