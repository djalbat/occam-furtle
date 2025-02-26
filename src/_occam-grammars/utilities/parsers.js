"use strict";

import { parserUtilities } from "occam-parsers";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

import FurtleParser from "../furtle/parser";

const { rulesFromBNF, parserFromRules, parserFromRulesAndStartRuleName } = parserUtilities;

export function furtleParserFromBNF(bnf) {
  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRules(FurtleParser, rules);

  return furtleParser;
}

export function furtleParserFromNothing() {
  const { bnf } = FurtleParser;

  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRules(FurtleParser, rules);

  return furtleParser;
}

export function furtleParserFromBNFAndStartRuleName(bnf, startRuleName) {
  let rules;

  rules = rulesFromBNF(bnf);

  rules = eliminateLeftRecursion(rules);  ///

  const furtleParser = parserFromRulesAndStartRuleName(FurtleParser, rules, startRuleName);

  return furtleParser;
}

export default {
  furtleParserFromBNF,
  furtleParserFromNothing,
  furtleParserFromBNFAndStartRuleName
};
