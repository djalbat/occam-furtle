"use strict";

const { FileContext, contextUtilities } = require("occam-languages");

const { chainContext } = contextUtilities;

class NominalFileContext extends FileContext {
  constructor(context, filePath, tokens, node) {
    super(context, filePath, tokens, node);

    return chainContext(this);
  }

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

  async verifyFile() {
    const fileVerifies = true;  ///

    return fileVerifies;
  }

  static fromFile(file, context) { return FileContext.fromFile(NominalFileContext, file, context); }
}

module.exports = NominalFileContext;
