"use strict";

const { FileContext } = require("occam-languages");

const { nominalLexer, nominalParser } = require("../../helpers/nominal");

class NominalFileContext extends FileContext {
  getProcedures(includeRelease = true) {
    const procedures = [];

    return procedures;
  }

  getLexer() {
    const lexer = nominalLexer; ///

    return lexer;
  }

  getParser() {
    const parser = nominalParser; ///

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

  static fromFile(file, context) {
    const nominalFileContext = FileContext.fromFile(NominalFileContext, file, context);

    return nominalFileContext;
  }
}

module.exports = NominalFileContext;
