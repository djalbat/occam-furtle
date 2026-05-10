"use strict";

const { queryUtilities } = require("occam-languages"),
      { primitiveUtilities, termsUtilities } = require("../../lib/index");  ///

const { nodeQuery } = queryUtilities,
      { primitiveFromNode } = primitiveUtilities,
      { termsFromPrimitives } = termsUtilities;

const termNodeQuery = nodeQuery("/statement/argument!/term!"),
      statementNodeQuery = nodeQuery("//lemma[3]//supposition[0]/statement!");

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
        statementNode = statementNodeQuery(node),
        termNode = termNodeQuery(statementNode),
        nodes = [
          termNode,
          statementNode
        ];

  return nodes;
}
