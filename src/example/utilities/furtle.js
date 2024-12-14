"use strict";

import { File } from "occam-entities";
import { fileSystemUtilities } from "necessary";

const { readFile } = fileSystemUtilities;

export function furtleFileFromNothing() {
  const filePath = "example/Free and bound variables.ftl",
        fileContent = readFile(filePath),
        path = filePath,  ///
        content = fileContent,  ///
        released = false,
        file = File.fromPathContentAndReleased(path, content, released),
        furtleFile = file;  ///

  return furtleFile;
}
