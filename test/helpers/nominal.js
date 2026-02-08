"use strict";

const { NominalLexer, NominalParser } = require("occam-grammars"),
      { lexersUtilities, parsersUtilities } = require("occam-custom-grammars");

const { combinedCustomGrammar } = require("../helpers/customGrammar");

const { lexerFromCombinedCustomGrammar } = lexersUtilities,
      { parserFromStartRuleNameAndCombinedCustomGrammar } = parsersUtilities;

const startRuleName = "statement",
      lexer = lexerFromCombinedCustomGrammar(NominalLexer, combinedCustomGrammar),
      parser = parserFromStartRuleNameAndCombinedCustomGrammar(NominalParser, startRuleName, combinedCustomGrammar),
      nominalLexer = lexer, ///
      nominalParser = parser; ///

module.exports = {
  nominalLexer,
  nominalParser
};
