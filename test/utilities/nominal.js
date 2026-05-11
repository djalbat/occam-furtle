"use strict";

const { NominalValue } = require("occam-nominal"),
      { queryUtilities } = require("occam-languages");

const { nodeQuery } = queryUtilities;

const termNodeQuery = nodeQuery("/statement/argument!/term!"),
      statementNodeQuery = nodeQuery("//lemma[3]//supposition[0]/statement!");

function nominalValuesFromNominalFileContext(nominalFileContext) {
  const fileContext = nominalFileContext,  ///
        node = fileContext.getNode(),
        statementNode = statementNodeQuery(node),
        termNode = termNodeQuery(statementNode),
        nodes = [
          termNode,
          statementNode
        ],
        context = nominalFileContext, ///
        nominalValues = nodes.map((node) => {
          const nominalValue = NominalValue.fromNode(node, context);

          return nominalValue;
        });

  return nominalValues;
}

module.exports = {
  nominalValuesFromNominalFileContext
};
