"use strict";

import { fileSystemUtilities } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-grammars";

import { nodeAsString } from "../utilities/string";

const { readFile } = fileSystemUtilities,
      { furtleLexerFromNothing } = lexersUtilities,
      { furtleParserFromNothing } = parsersUtilities;

const furtleLexer = furtleLexerFromNothing(),
      furtleParser = furtleParserFromNothing();

export default class FileContext {
  constructor(node, tokens, filePath) {
    this.node = node;
    this.tokens = tokens;
    this.filePath = filePath;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getFilePath() {
    return this.filePath;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  static fromFilePath(filePath) {
    const fileContent = readFile(filePath),
          content = fileContent,  ///
          tokens = furtleLexer.tokenise(content),
          node = furtleParser.parse(tokens),
          fileContext = new FileContext(node, tokens, filePath);

    return fileContext;
  }
}
