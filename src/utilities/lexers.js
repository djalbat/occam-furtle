"use strict";

import { lexerUtilities } from "occam-lexers";

import FurtleLexer from "../furtle/lexer";

const { lexerFromRules, rulesFromEntries } = lexerUtilities;

export function furtleLexerFromEntries(Class, entries) {
  if (entries === undefined) {
    entries = Class;  ///

    Class = FurtleLexer;  ///
  }

  let rules;

  rules = rulesFromEntries(entries);

  const furtleLexer = lexerFromRules(Class, rules);

  return furtleLexer;
}

export function furtleLexerFromNothing(Class) {
  if (Class === undefined) {
    Class = FurtleLexer;  ///
  }

  const { entries } = FurtleLexer;

  let rules;

  rules = rulesFromEntries(entries);

  const furtleLexer = lexerFromRules(Class, rules);

  return furtleLexer;
}

export default {
  furtleLexerFromEntries,
  furtleLexerFromNothing
};
