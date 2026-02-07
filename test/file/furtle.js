"use strict";

const { File } = require("occam-model"),
      { FurtleFileContext } = require("../../lib/index"); ///

class FurtleFile extends File {
  getFileContext() {
    const FileContext = FurtleFileContext;  ///

    return FileContext;
  }

  static fromJSON(json) { return File.fromJSON(FurtleFile, json); }

  static fromDocument(document) { return File.fromDocument(FurtleFile, document); }

  static fromPathContentAndReleased(path, content, released) { return File.fromPathContentAndReleased(FurtleFile, path, content, released); }
}

module.exports = FurtleFile;
