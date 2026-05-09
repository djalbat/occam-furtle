"use strict";

const { File } = require("occam-model"),
      { fileSystemUtilities } = require("necessary");

const { readFile } = fileSystemUtilities;

function furtleFileFromNothing() {
  const filePath = "../../Logic/first-order-logic/Functions/Free and bound variables.ftl",
        fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released),
        furtleFile = file;  ///

  return furtleFile;
}

function nominalFileFromNohting() {
  const filePath = "../../Logic/first-order-logic/lemmas.nml",
        fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released),
        nominalFile = file; ///

  return nominalFile;
}

module.exports = {
  furtleFileFromNothing,
  nominalFileFromNohting
};
