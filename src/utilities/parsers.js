"use strict";

import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import FurtleParser from "../furtle/parser";

const { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

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

export function furtleParserFromNothing(Class) {
  if (Class === undefined) {
    Class = FurtleParser;  ///
  }

  const { bnf } = FurtleParser;

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRules(Class, rules);

  return furtleParser;
}

export function furtleParserFromBNFAndStartRuleName(Class, bnf, startRuleName) {
  if (startRuleName === undefined) {
    startRuleName = bnf;  ///

    bnf = Class;  ///

    Class = FurtleParser;  ///
  }

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRulesAndStartRuleName(Class, rules, startRuleName);

  return furtleParser;
}

export default {
  furtleParserFromBNF,
  furtleParserFromNothing,
  furtleParserFromBNFAndStartRuleName
};
