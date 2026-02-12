"use strict";

const { FileContext } = require("occam-languages");

const { nominalLexer, nominalParser } = require("../../helpers/nominal");

class NominalFileContext extends FileContext {
  constructor(context, filePath, tokens, node) {
    super(context, filePath, tokens, node);
  }

  getProcedures(includeRelease = true) {
    const procedures = [];

    return procedures;
  }

  getLexer() {
    const lexer = nominalLexer; ///

    return lexer;
  }

  getParser() {
    const parser = nominalParser;

    return parser;
  }

  clear() {
    ///
  }

  complete() {
    ///
  }

  getTypePrefixes(includeRelease = true) {
    const typePrefixes = [];

    return typePrefixes;
  }

  async verifyFile() {
    const fileVerifies = true;  ///

    return fileVerifies;
  }

  static fromFile(file, context) { return FileContext.fromFile(NominalFileContext, file, context); }
}

module.exports = NominalFileContext;
