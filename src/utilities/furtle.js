"use strict";

import FurtleLexer from "../furtle/Lexer";
import FurtleParser from "../furtle/Parser";

import { furtleLexerFromNothing } from "../utilities/lexers";
import { furtleParserFromNothing } from "../utilities/parsers";

export const furtleLexer = furtleLexerFromNothing(FurtleLexer);

export const furtleParser = furtleParserFromNothing(FurtleParser);
