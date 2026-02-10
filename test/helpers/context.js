"use strict";

const { arrayUtilities } = require("necessary"),
      { filePathUtilities } = require("occam-model"),
      { FurtleFileContext } = require("../../lib/index"); ///

const NominalFileContext = require("../context/file/nominal");

const { first } = arrayUtilities,
      { isFilePathFurtleFilePath, isFilePathNominalFilePath } = filePathUtilities;

function FileContextFromFilePath(filePath) {
  let FileContext = null;

  const filePathFurtleFilePath = isFilePathFurtleFilePath(filePath),
        filePathNominalFilePath = isFilePathNominalFilePath(filePath);

  if (filePathFurtleFilePath) {
    FileContext = FurtleFileContext;  ///
  }

  if (filePathNominalFilePath) {
    FileContext = NominalFileContext; ///
  }

  return FileContext;
}


function procedureFromReleaseContext(releaseContext) {
  const procedures = releaseContext.getProcedures(),
        firstProcedure = first(procedures),
        procedure = firstProcedure; ///

  return procedure;
}

module.exports = {
  FileContextFromFilePath,
  procedureFromReleaseContext
};
