"use strict";

const { FileContext } = require("occam-languages");

const { nominalLexer, nominalParser } = require("../../helpers/nominal");

class NominalFileContext extends FileContext {
  getProcedures(includeRelease = true) {
    const procedures = [];

    return procedures;
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

  static fromFile(file, context) {
    const lexer = nominalLexer, ///
          parser = nominalParser,
          nominalFileContext = FileContext.fromFileLexerAndParser(NominalFileContext, file, lexer, parser, context);

    return nominalFileContext;
  }
}

module.exports = NominalFileContext;
