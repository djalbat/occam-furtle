"use strict";

const { queryUtilities } = require("occam-languages");  ///

const { nodeQuery } = queryUtilities;

const termNodeQuery = nodeQuery("/statement/argument!/term!"),
      statementNodeQuery = nodeQuery("//lemma[3]//supposition[0]/statement!");

function nodesFromNominalFileContext(nominalFileContext) {
  const fileContext = nominalFileContext,  ///
        node = fileContext.getNode(),
        statementNode = statementNodeQuery(node),
        termNode = termNodeQuery(statementNode),
        nodes = [
          termNode,
          statementNode
        ];

  return nodes;
}

module.exports = {
  nodesFromNominalFileContext
};
