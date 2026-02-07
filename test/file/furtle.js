"use strict";

const { File } = require("occam-model"),
      { FurtleFileContext } = require("../../lib/index"); ///

class FurtleFile extends File {
  getFileContext() {
    const FileContext = FurtleFileContext;  ///

    return FileContext;
  }
}

module.exports = FurtleFile;
