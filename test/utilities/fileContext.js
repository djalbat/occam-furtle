"use strict";

const { filePathUtilities } = require("occam-model"),
      { FurtleFileContext } = require("../../lib/index");

const { isFilePathFurtleFilePath } = filePathUtilities;

function FileContextFromFilePath(filePath) {
  let FileContext = null;

  const filePathFurtleFilePath = isFilePathFurtleFilePath(filePath);

  if (filePathFurtleFilePath) {
    FileContext = FurtleFileContext;  ///
  }

  return FileContext;
}

module.exports = {
  FileContextFromFilePath
};
