"use strict";

import { CombinedCustomGrammar } from "occam-custom-grammars";

export function combinedCustomGrammarFromNothing() {
  const customGrammars = [

        ],
        includeDefault = false,
        combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars, includeDefault);

  return combinedCustomGrammar;
}