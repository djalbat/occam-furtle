"use strict";

const { FileContext, contextUtilities } = require("../../../lib/index");  ///

const { chainContext } = contextUtilities;

class NominalFileContext extends FileContext {
  constructor(context, filePath, tokens, node) {
    super(context, filePath, tokens, node);

    return chainContext(this);
  }

  verifyFile() {
    const fileVerifies = true;  ///

    return fileVerifies;
  }

  clear() {
    ///
  }

  complete() {
    ///
  }

  static fromFile(file, context) {
    const nominalFileContext = FileContext.fromFile(NominalFileContext, file, context);

    return nominalFileContext;
  }
}

module.exports = NominalFileContext;
