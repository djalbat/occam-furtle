"use strict";

const { Query } = require("occam-query"),
      { arrayUtilities } = require("necessary"),
      { primitiveUtilities, termsUtilities } = require("../../lib/index");  ///

const { first } = arrayUtilities,
      { primitiveFromNode } = primitiveUtilities,
      { termsFromPrimitives } = termsUtilities;

const termNodeQuery = Query.fromExpressionString("//lemma[3]//supposition[0]//term[0]");

function termsFromNominalFileContext(nominalFileContext) {
  const fileContext = nominalFileContext,  ///
        nodes = nodesFromFileContext(fileContext),
        context = fileContext,  ///
        primitives = primitivesFromNodes(nodes, context),
        terms = termsFromPrimitives(primitives);

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
