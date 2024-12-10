"use strict";

import { fileSystemUtilities } from "necessary";
import { CustomGrammar, CombinedCustomGrammar } from "occam-custom-grammars";

const { readFile } = fileSystemUtilities;

export function combinedCustomGrammarFromNothing() {
  const filePath = "example/customGrammars.json",
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