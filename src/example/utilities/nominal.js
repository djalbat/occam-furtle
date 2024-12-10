"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromNothing } from "../utilities/grammar";

const { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromStartRuleNameAndCombinedCustomGrammar } = parsersUtilities;

const combinedCustomGrammar = combinedCustomGrammarFromNothing();

export function nominalLexerFromNothing() {
  const nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar);

  return nominalLexer;
}

export function nominalParserFromNothing() {
  const startRuleName = "statement",
        nominalParser = nominalParserFromStartRuleNameAndCombinedCustomGrammar(startRuleName, combinedCustomGrammar);

  return nominalParser;
}
