"use strict";

const { Query } = require("occam-query"),
      { arrayUtilities } = require("necessary"),
      { primitiveUtilities, termsUtilities } = require("../../lib/index");  ///

const { first } = arrayUtilities,
      { primitiveFromNode } = primitiveUtilities,
      { termsFromPrimitives } = termsUtilities;

const freeTermNodeQuery = Query.fromExpressionString("//term[1]"),
      boundTermNodeQuery = Query.fromExpressionString("//term[0]");

function termsFromNominalFileContext(nominalFileContext, free = true) {
  const fileContext = nominalFileContext,  ///
        nodes = nodesFromFileContext(fileContext, free),
        context = fileContext,  ///
        primitives = primitivesFromNodes(nodes, context),
        terms = termsFromPrimitives(primitives, free);

  return terms;
}

module.exports = {
  termsFromNominalFileContext
};

function primitivesFromNodes(nodes, context) {
  const primitives = nodes.map((node) => {
    const primitive = primitiveFromNode(node, context);

    return primitive;
  });

  return primitives;
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
