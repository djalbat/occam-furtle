"use strict";

import "./index";

import { fileSystemUtilities } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-grammars";

import topLevelVerifier from "./verifier/topLevel";

const { readFile } = fileSystemUtilities,
      { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

const furtleLexer = furtleLexerFromNothing(),
      furtleParser = furtleParserFromNothing();

const filePath = "first-order-logic/Procedures/Free and bound variables.ftl",
      fileContent = readFile(filePath),
      content = fileContent,  ///
      tokens = furtleLexer.tokenise(content),
      node = furtleParser.parse(tokens),
      fileContext = null;

topLevelVerifier.verify(node, fileContext);




