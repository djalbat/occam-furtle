"use strict";

import { lexerUtilities } from "occam-lexers";

import FurtleLexer from "../furtle/lexer";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function furtleLexerFromEntries(entries) {
  const rules = rulesFromEntries(entries),
        furtleLexer = lexerFromRules(FurtleLexer, rules);

  return furtleLexer;
}

export function furtleLexerFromNothing() {
  const { entries } = FurtleLexer,
        rules = rulesFromEntries(entries),
        furtleLexer = lexerFromRules(FurtleLexer, rules);

  return furtleLexer;
}

export default {
  furtleLexerFromEntries,
  furtleLexerFromNothing
};
