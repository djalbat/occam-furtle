"use strict";

import { lexersUtilities, parsersUtilities } from "occam-grammars";

import FurtleLexer from "../furtle/Lexer";
import FurtleParser from "../furtle/Parser";

const { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

export const furtleLexer = furtleLexerFromNothing(FurtleLexer);

export const furtleParser = furtleParserFromNothing(FurtleParser);
