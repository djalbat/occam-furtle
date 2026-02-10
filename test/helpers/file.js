"use strict";

const { File } = require("occam-model"),
      { fileSystemUtilities } = require("necessary");

const { readFile } = fileSystemUtilities;

function furtleFileFromNothing() {
  const filePath = "test/Free and bound variables.ftl",
        fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released),
        furtleFile = file;  ///

  return furtleFile;
}

function nominalFileFromNohting() {
  const path = "./statement.nml",
        content = `∀n m = m`,
        released = false,
        file = File.fromPathContentAndReleased(path, content, released),
        nominalFile = file; ///

  return nominalFile;
}

module.exports = {
  furtleFileFromNothing,
  nominalFileFromNohting
};
