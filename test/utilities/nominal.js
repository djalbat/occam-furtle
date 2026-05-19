"use strict";

const { NominalValue } = require("../../lib/index"),  ///
      { queryUtilities } = require("occam-query"),  ///
      { nominalUtilities } = require("occam-languages");

const NominalFileContext = require("../context/file/nominal");

const { nodeQuery } = queryUtilities,
      { nominalLexerFromCombinedCustomGrammar, nominalParserFromStartRuleNameAndCombinedCustomGrammar } = nominalUtilities;

const content = "∀n n = n",
      startRuleName = "statement",
      termNodeQuery = nodeQuery("/statement/argument!/term!");

function nominalValuesFromNothing(context) {
  const combinaedCustomGrammar = context.getCombinedCustomGrammar(),
        nominalLexer = nominalLexerFromCombinedCustomGrammar(combinaedCustomGrammar),
        nominalParser = nominalParserFromStartRuleNameAndCombinedCustomGrammar(startRuleName, combinaedCustomGrammar),
        tokens = nominalLexer.tokenise(content),
        node = nominalParser.parse(tokens),
        statementNode = node, ///
        termNode = termNodeQuery(statementNode),
        nodes = [ ///
          termNode,
          statementNode
        ],
        nominalFileContext = NominalFileContext.fromNodeAndTokens(node, tokens, context);

  context = nominalFileContext; ///

  const nominalValues = nomainlValuesFromNodes(nodes, context);

  return nominalValues;
}

module.exports = {
  nominalValuesFromNothing
};

function nomainlValuesFromNodes(nodes, context) {
  const nominalValues = nodes.map((node) => {
    const nominalValue = NominalValue.fromNode(node, context);

    return nominalValue;
  });

  return nominalValues;
}
