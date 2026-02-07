"use strict";

const { FurtleFile } = require("../../lib/index"),
      { fileSystemUtilities } = require("necessary");

const NominalFile = require("../file/nominal");

const { readFile } = fileSystemUtilities;

function furtleFileFromNothing() {
  const filePath = "test/Free and bound variables.ftl",
        fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = FurtleFile.fromPathContentAndReleased(path, content, released),
        furtleFile = file;  ///

  return furtleFile;
}

function nominalFileFromNohting() {
  const path = "./statement.nml",
        content = `∀n m = m`,
        released = false,
        file = NominalFile.fromPathContentAndReleased(path, content, released),
        nominalFile = file; ///

  return nominalFile;
}

module.exports = {
  furtleFileFromNothing,
  nominalFileFromNohting
};
