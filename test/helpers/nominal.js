"use strict";

const { NominalFileContext } = require("../../lib/index"); ///
const { lexersUtilities, parsersUtilities } = require("occam-custom-grammars");

const { combinedCustomGrammarFromNothing } = require("../helpers/grammar");

const { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromStartRuleNameAndCombinedCustomGrammar } = parsersUtilities;

function nominalFileContextFromReleaseContext(releaseContext) {
  const content = `∀n m = m`,
        startRuleName = "statement",
        combinedCustomGrammar = combinedCustomGrammarFromNothing(),
        nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar),
        nominalParser = nominalParserFromStartRuleNameAndCombinedCustomGrammar(startRuleName, combinedCustomGrammar),
        lexer = nominalLexer, ///
        parser = nominalParser, ///
        tokens = lexer.tokenise(content),
        node = parser.parse(tokens),
        context = releaseContext, ///
        filePath = "lemmas.nml",
        fileContext = NominalFileContext.fromFilePathNodeAndTokens(filePath, tokens, node, context),
        nominalFileContext = fileContext;  ///

  return nominalFileContext;
}

module.exports = {
  nominalFileContextFromReleaseContext
};
