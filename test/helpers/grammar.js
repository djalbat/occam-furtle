"use strict";

const { fileSystemUtilities } = require("necessary"),
      { CustomGrammar, CombinedCustomGrammar, lexersUtilities, parsersUtilities} = require("occam-custom-grammars");

const { readFile } = fileSystemUtilities,
      { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromStartRuleNameAndCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing(),
      startRuleName = "statement",
      nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar),
      nominalParser = nominalParserFromStartRuleNameAndCombinedCustomGrammar(startRuleName, combinedCustomGrammar);

module.exports = {
  nominalLexer,
  nominalParser
};

function combinedCustomGrammarFromNothing() {
  const filePath = "test/customGrammars.json",
        fileContent = readFile(filePath),
        json = JSON.parse(fileContent),
        customGrammars = customGrammarsFromJSON(json),
        includeDefault = false,
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars, includeDefault);

  return combinedCustomGrammar;
}

function customGrammarsFromJSON(json) {
  const customGrammarsJSON = json,  ///
        customGrammars = customGrammarsJSON.map((customGrammarsJSON) => {
          const json = customGrammarsJSON,  ///
                customGrammar = CustomGrammar.fromJSON(json);

          return customGrammar;
        });

  return customGrammars;
}