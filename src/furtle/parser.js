"use strict";

import { FurtleParser as FurtleParserBase } from "occam-languages";

import NonTerminalNodeMap from "../nonTerminalNodeMap";

export default class FurtleParser extends FurtleParserBase {
  static NonTerminalNodeMap = NonTerminalNodeMap;
}
