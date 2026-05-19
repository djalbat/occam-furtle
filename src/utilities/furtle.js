"use strict";

import { furtleUtilities } from "occam-languages";

import FurtleLexer from "../furtle/lexer";
import FurtleParser from "../furtle/parser";

const { furtleLexerFromNothing, furtleParserFromNothing } = furtleUtilities;

export const furtleLexer = furtleLexerFromNothing(FurtleLexer);

export const furtleParser = furtleParserFromNothing(FurtleParser);
