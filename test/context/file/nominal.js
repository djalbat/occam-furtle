"use strict";

const { FileContext } = require("occam-languages");

const { nominalLexer, nominalParser } = require("../../helpers/nominal");

class NominalFileContext extends FileContext {
  constructor(context, fileContent, filePath, tokens, node, lexer, parser, procedures, typePrefixes) {
    super(context, fileContent, filePath, tokens, node);

    this.lexer = lexer;
    this.parser = parser;
    this.procedures = procedures;
    this.typePrefixes = typePrefixes;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getProcedures(includeRelease = true) {
    return this.procedures;
  }

  getTypePrefixes(includeRelease = true) {
    return this.typePrefixes;
  }

  clear() {
    ///
  }

  complete() {
    ///
  }

  async verifyFile() {
    const fileVerifies = true;  ///

    return fileVerifies;
  }

  static fromFile(file, context) {
    const lexer = nominalLexer, ///
          parser = nominalParser, ///
          procedures = [],
          typePrefixes = [],
          nominalFileContext = FileContext.fromFile(NominalFileContext, file, lexer, parser,procedures, typePrefixes, context);

    return nominalFileContext;
  }
}

module.exports = NominalFileContext;
