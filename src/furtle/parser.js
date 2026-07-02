"use strict";

import { FurtleParser as FurtleParserBase } from "occam-grammars";

import NonTerminalNodeMap from "../nonTerminalNodeMap";

export default class FurtleParser extends FurtleParserBase {
  static NonTerminalNodeMap = NonTerminalNodeMap;
}
