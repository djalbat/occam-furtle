"use strict";

const { File } = require("occam-entities"),
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

module.exports = {
  furtleFileFromNothing
};
