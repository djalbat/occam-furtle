"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import FileContext from "../context/file";

import { combinedCustomGrammarFromNothing } from "../utilities/grammar";

const { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromStartRuleNameAndCombinedCustomGrammar } = parsersUtilities;

export function nominalFileContextFromReleaseContext(releaseContext) {
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
        fileContext = FileContext.fromNodeAndTokens(node, tokens, context),
        nominalFileContext = fileContext;  ///

  return nominalFileContext;
}
