"use strict";

const { File } = require("occam-model");

const NominalileContext = require("../context/file/nominal");

class Nominalile extends File {
  getFileContext() {
    const FileContext = NominalileContext;  ///

    return FileContext;
  }
}

module.exports = Nominalile;
