"use strict";

const { FileContext } = require("occam-languages");

class NominalFileContext extends FileContext {
  static fromNodeAndTokens(node, tokens, context) { return FileContext.fromNodeAndTokens(NominalFileContext, node, tokens, context); }
}

module.exports = NominalFileContext;
