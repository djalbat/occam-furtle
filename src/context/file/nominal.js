"use strict";

import FileContext from "../../context/file";

import { chainContext } from "../../utilities/context";

export default class NominalFileContext extends FileContext {
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

  static fromFile(file, context) {
    const nominalFileContext = FileContext.fromFile(NominalFileContext, file, context);

    return nominalFileContext;
  }
}
