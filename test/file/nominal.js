"use strict";

const { File } = require("occam-model");

const NominalileContext = require("../context/file/nominal");

class Nominalile extends File {
  getFileContext() {
    const FileContext = NominalileContext;  ///

    return FileContext;
  }

  static fromJSON(json) { return File.fromJSON(Nominalile, json); }

  static fromDocument(document) { return File.fromDocument(Nominalile, document); }

  static fromPathContentAndReleased(path, content, released) { return File.fromPathContentAndReleased(Nominalile, path, content, released); }
}

module.exports = Nominalile;
