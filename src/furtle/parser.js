"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class FurtleParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(FurtleParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(FurtleParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(FurtleParser, rules); }
}
