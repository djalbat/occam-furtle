"use strict";

import { lexerUtilities } from "occam-lexers";
import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import FurtleLexer from "../../furtle/lexer";
import FurtleParser from "../../furtle/parser";

const { rulesFromBNF, parserFromRules } = parserUtilities,
      { lexerFromRules, rulesFromEntries } = lexerUtilities;

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

export function furtleParserFromBNF(Class, bnf) {
  if (bnf === undefined) {
    bnf = Class;  ///

    Class = FurtleParser;  ///
  }

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRules(Class, rules);

  return furtleParser;
}
