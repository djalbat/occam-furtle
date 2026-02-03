"use strict";

import FurtleLexer from "../furtle/lexer";
import FurtleParser from "../furtle/parser";

import { furtleLexerFromNothing } from "../utilities/lexers";
import { furtleParserFromNothing } from "../utilities/parsers";

export const furtleLexer = furtleLexerFromNothing(FurtleLexer);

export const furtleParser = furtleParserFromNothing(FurtleParser);
