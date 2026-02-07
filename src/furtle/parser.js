"use strict";

import { NonTerminalNode } from "occam-languages";

import { FurtleParser as FurtleParserBase } from "occam-grammars";

import NonTerminalNodeMap from "../nonTerminalNodeMap";

export default class FurtleParser extends FurtleParserBase {
  static NonTerminalNodeMap = NonTerminalNodeMap;

  static defaultNonTerminalNode = NonTerminalNode;
}
