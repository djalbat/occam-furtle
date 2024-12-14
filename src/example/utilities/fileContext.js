"use strict";

import FileContext from "../context/file";

import { nominalLexerFromNothing, nominalParserFromNothing } from "../utilities/nominal";

const nominalLexer = nominalLexerFromNothing(),
      nominalParser = nominalParserFromNothing();

export function fileContextFromNothing() {
  const content = `∀n n = n`,
        tokens = nominalLexer.tokenise(content),
        node = nominalParser.parse(tokens),
        fileContext = FileContext.fromNodeAndTokens(node, tokens);

  return fileContext;
}
