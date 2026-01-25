"use strict";

const { fileSystemUtilities } = require("necessary"),
      { CustomGrammar, CombinedCustomGrammar } = require("occam-custom-grammars");

const { readFile } = fileSystemUtilities;

function combinedCustomGrammarFromNothing() {
  const filePath = "test/customGrammars.json",
        fileContent = readFile(filePath),
        json = JSON.parse(fileContent),
        customGrammars = customGrammarsFromJSON(json),
        includeDefault = false,
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars, includeDefault);

  return combinedCustomGrammar;
}

module.exports = {
  combinedCustomGrammarFromNothing
};

function customGrammarsFromJSON(json) {
  const customGrammarsJSON = json,  ///
        customGrammars = customGrammarsJSON.map((customGrammarsJSON) => {
          const json = customGrammarsJSON,  ///
                customGrammar = CustomGrammar.fromJSON(json);

          return customGrammar;
        });

  return customGrammars;
}